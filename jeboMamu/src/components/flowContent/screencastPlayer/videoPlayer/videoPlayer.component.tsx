import Spinner from '@/components/elements/Spinner/spinner.component'
import { Sizes } from '@/components/types/sizes.types'
import {
  forwardRef,
  ForwardRefRenderFunction,
  MutableRefObject,
  ReactEventHandler,
  useState,
} from 'react'

interface Props {
  videoSrc: string
  playing: boolean
  ref?: MutableRefObject<HTMLVideoElement | null>
  onCanPlay: ReactEventHandler<HTMLVideoElement>
  onPlay: ReactEventHandler<HTMLVideoElement>
  onEnded: ReactEventHandler<HTMLVideoElement>
  onTimeUpdate: (time: number) => void
}

const VideoPlayerRenderFunction: ForwardRefRenderFunction<
  HTMLVideoElement,
  Props
> = (props, ref) => {
  const { videoSrc, onCanPlay, onPlay, onEnded, onTimeUpdate } = props
  const [buffering, setBuffering] = useState<boolean>(true)

  const canPlayHandler: ReactEventHandler<HTMLVideoElement> = (event) => {
    setBuffering(false)
    onCanPlay(event)
  }

  const waitingHandler: ReactEventHandler<HTMLVideoElement> = () => {
    setBuffering(true)
  }

  const timeUpdateHandler: ReactEventHandler<HTMLVideoElement> = (event) => {
    const current = Math.floor(event.currentTarget.currentTime)
    // const current = event.currentTarget.currentTime
    onTimeUpdate(current)
  }

  return (
    <>
      <video
        width="auto"
        height="auto"
        className="max-h-full rounded-xl"
        ref={ref}
        autoPlay
        onCanPlay={canPlayHandler}
        onWaiting={waitingHandler}
        onPlay={onPlay}
        onEnded={onEnded}
        onTimeUpdate={timeUpdateHandler}
      >
        <source src={videoSrc} />
      </video>
      {buffering && (
        <div className="z-10 absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center rounded-xl">
          <Spinner size={Sizes.lg} />
        </div>
      )}
    </>
  )
}

const VideoPlayer = forwardRef(VideoPlayerRenderFunction)

VideoPlayer.displayName = 'VideoPlayer'
export default VideoPlayer
