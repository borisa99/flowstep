import {
  useState,
  useRef,
  useMemo,
  FC,
  useEffect,
  ReactEventHandler,
  // useReducer,
} from 'react'

import { useTranslation } from 'next-i18next'

import { useAppSelector } from '@/redux/hooks'
import { selectScreencastId } from '@/redux/slices/flow/flowScreencast.slice'

import { slugify } from '@/utils/helperFunctions'

// import screencastMocks from './mocks'
import { ContentType } from '@/components/types/content.types'
import Skeleton from '@/components/flowContent/skeleton/skeleton.component'
import FlowContentViewer from '@/components/flowContent/flowContentViewer/flowContentViewer.component'
import FlowContentSummary from '@/components/flowContent/flowContentSummary/flowContentSummary.component'
import SaveScreenPopup from '@/components/flowContent/saveScreenPopup/saveScreenPopup.component'
import VideoTimeline from './videoTimeline/videoTimeline.component'
import VideoPlayer from './videoPlayer/videoPlayer.component'
import VideoControls from './videoControls/videoControls.component'
import TrackBar from './trackBar/trackBar.component'
import DetailsPopup from '../detailsPopup/detailsPopup.component'
import SharePopup from '../sharePopup/sharePopup.component'

import { useScreencastCardByIdQuery } from '@/graphql/generated'

interface Props {
  onClose: () => void
}

const playbackRates = [0.5, 1, 1.5, 2]

const ScreencastPlayer: FC<Props> = (props) => {
  const { onClose } = props

  const { t } = useTranslation('screencast-player')

  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [index, setIndex] = useState<number>(0)
  const [playing, setPlaying] = useState<boolean>(true)
  const [playbackRate, setPlaybackRate] = useState<number>(1)
  const [duration, setDuration] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)

  const [showSaveDialog, setShowSaveDialog] = useState<boolean>(false)
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const [showShare, setShowShare] = useState<boolean>(false)

  const screencastId = useAppSelector(selectScreencastId)

  const {
    data: screencastResponseData,
    loading,
    refetch,
  } = useScreencastCardByIdQuery({
    variables: { id: screencastId },
    skip: !screencastId,
  })

  useEffect(() => {
    if (screencastId) {
      refetch()
    }
  }, [screencastId, refetch])

  const screencastData = screencastResponseData?.flow_screencasts_by_pk

  // TODO: Remove. Used for demo purposes only

  // const [data, dispatch] = useReducer(reducer, screencastMocks)

  // const selectedScreencast = useMemo(() => {
  //   return data.items[index]
  // }, [index, data])

  // const toggleSave = () => {
  //   if (selectedScreencast.saved)
  //     dispatch({ type: Action.TOGGLE_SAVE, payload: selectedScreencast.id })
  //   else setShowSaveDialog(true)
  // }

  // timestmap is in timestmap format ex. 01:01, calculation is done with integers
  const parseTimestampToInt = (timestamp: string) => {
    const parts = timestamp
      .split(':')
      .map((e) => parseInt(e))
      .reverse()

    return parts[1] + parts[2] * 60
  }

  // Calculating durations of each video section
  // Marking active section
  const timestamps = useMemo(() => {
    if (duration === 0) return []
    else {
      let screencastTiemstamps = screencastData
        ? screencastData.flow_screencast_timestamps
            .map((e) => ({
              ...e,
              timestamp: parseTimestampToInt(e.timestamp),
            }))
            .sort((a, b) => a.timestamp - b.timestamp)
        : []

      if (
        screencastTiemstamps.length === 0 ||
        screencastTiemstamps[0].timestamp > 0
      ) {
        screencastTiemstamps = [
          {
            id: 'initial',
            timestamp: 0,
            title: t('start-title'),
            __typename: 'flow_screencast_timestamps',
          },
          ...screencastTiemstamps,
        ]
      }

      return screencastTiemstamps.map((item, index) => {
        const lastItem = index === screencastTiemstamps.length - 1
        const returnOBJ = {
          title: item.title,
          timestamp: item.timestamp,
          duration: lastItem
            ? duration - item.timestamp
            : screencastTiemstamps[index + 1].timestamp - item.timestamp,
          active: lastItem
            ? progress >= item.timestamp
            : progress >= item.timestamp &&
              progress < screencastTiemstamps[index + 1].timestamp,
        }

        return returnOBJ
      })
    }
  }, [duration, screencastData, t, progress])

  useEffect(() => {
    if (playing) videoRef.current?.play()
    else videoRef.current?.pause()
  }, [playing])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate
    }
  }, [playbackRate])

  const canPlayHandler: ReactEventHandler<HTMLVideoElement> = () => {
    setDuration(Math.floor(videoRef.current?.duration ?? 0))
  }

  const playbackRateChangeHandler = () => {
    setPlaybackRate((prev) => {
      const nextIndex = (playbackRates.indexOf(prev) + 1) % playbackRates.length
      return playbackRates[nextIndex]
    })
  }

  const toggleFullscreenHandler: ReactEventHandler<HTMLSpanElement> = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  const seekHandler = (timestamp: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timestamp
      setProgress(timestamp)
    }
  }

  const videoPlayHandler = () => {
    if (!playing) setPlaying(true)
  }

  const videoEndedHandler = () => {
    setPlaying(false)
    if (
      screencastData &&
      index < screencastData.flow_screencast_timestamps.length - 1
    )
      setIndex((prev) => prev + 1)
  }

  return (
    <FlowContentViewer
      show={true}
      onClose={onClose}
      index={index}
      setIndex={setIndex}
      totalItems={99}
    >
      {showSaveDialog && (
        <SaveScreenPopup
          id={screencastData?.id}
          type={ContentType.screencast}
          onClose={() => setShowSaveDialog(false)}
        />
      )}
      {showDetails && (
        <DetailsPopup
          type={ContentType.screencast}
          upload_date={screencastData?.created_at}
          details={screencastData?.flow_screencast_details}
          components={screencastData?.flow_screencast_components}
          timestamps={screencastData?.flow_screencast_timestamps}
          onClose={() => setShowDetails(false)}
        />
      )}
      {showShare && (
        <SharePopup
          onClose={() => setShowShare(false)}
          type={ContentType.screencast}
          slug={slugify(screencastData?.title as string)}
          slugTitle={'screencast'}
        />
      )}
      <div className="grid grid-cols-12 grid-rows-1 h-[calc(100%_-_5.25rem)] max-w-[60rem]">
        {loading || !screencastData ? (
          <Skeleton />
        ) : (
          <>
            <div className="col-span-6 flex justify-end">
              <div
                className="max-w-[375px] aspect-9/19.5 relative flex justify-center"
                ref={containerRef}
              >
                <div
                  className="absolute inset-0 flex flex-col-reverse text-white z-10 group"
                  onClick={() => setPlaying((prev) => !prev)}
                >
                  <div
                    onClick={(event) => event.stopPropagation()}
                    className="group-hover:bg-black invisible group-hover:visible select-none rounded-xl"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)',
                    }}
                  >
                    <div className="py-4">
                      <TrackBar
                        items={timestamps}
                        progress={progress}
                        setProgress={seekHandler}
                      />
                    </div>
                    <VideoControls
                      playbackRate={playbackRate}
                      duration={duration}
                      progress={progress}
                      playing={playing}
                      togglePlaying={() => setPlaying((prev) => !prev)}
                      onPlaybackRateChange={playbackRateChangeHandler}
                      onToggleFullScreen={toggleFullscreenHandler}
                    />
                  </div>
                </div>
                <VideoPlayer
                  videoSrc={screencastData.screencast_url}
                  playing={true}
                  onCanPlay={canPlayHandler}
                  onPlay={videoPlayHandler}
                  onEnded={videoEndedHandler}
                  onTimeUpdate={(number) => setProgress(number)}
                  ref={videoRef}
                />
              </div>
            </div>

            <div className="col-span-5 pl-8 overflow-hidden flex flex-col">
              <FlowContentSummary
                flowScreencastId={screencastData.id}
                flowTitle={screencastData.flow.title}
                screencastTitle={screencastData.title}
                likeCount={
                  screencastData.flow_screencast_likes_aggregate.aggregate
                    ?.count ?? 0
                }
                isPreviouslyLiked={screencastData.is_liked ?? false}
                isPreviouslySaved={screencastData.is_saved ?? false}
                toggleSave={() => setShowSaveDialog((prev) => !prev)}
                toggleDetails={() => setShowDetails((prev) => !prev)}
                toggleShare={() => setShowShare((prev) => !prev)}
              />
              <VideoTimeline
                items={timestamps}
                playing={playing}
                progress={progress}
                togglePlaying={() => setPlaying((prev) => !prev)}
                setProgress={seekHandler}
              />
            </div>
          </>
        )}
      </div>
    </FlowContentViewer>
  )
}

export default ScreencastPlayer
