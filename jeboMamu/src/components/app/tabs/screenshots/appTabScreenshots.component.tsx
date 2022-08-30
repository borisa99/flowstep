import { useAppSelector } from '@/redux/hooks'
import { selectAppScreenshots } from '@/redux/slices/app.slice'
import AppScreenshotItem from '../appScreenshotAttachmentItem.component'

const AppTabScreenshots = () => {
  const appScreenshots = useAppSelector(selectAppScreenshots)

  return (
    <div className="grid grid-cols-4 gap-6 mt-8">
      {appScreenshots?.map((item) => {
        return (
          <AppScreenshotItem
            key={item.id}
            image={item.url}
            title={item.title}
          />
        )
      })}
    </div>
  )
}

export default AppTabScreenshots
