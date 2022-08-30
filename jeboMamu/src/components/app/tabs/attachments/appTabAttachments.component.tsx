import { useAppSelector } from '@/redux/hooks'
import { selectAppAttachemnts } from '@/redux/slices/app.slice'
import AppAttachmentItem from '../appScreenshotAttachmentItem.component'

const AppTabAttachments = () => {
  const appAttachments = useAppSelector(selectAppAttachemnts)

  return (
    <div className="grid grid-cols-4 gap-6 mt-8">
      {appAttachments?.map((item) => {
        return (
          <AppAttachmentItem
            key={item.id}
            image={item.url}
            title={item.title}
          />
        )
      })}
    </div>
  )
}

export default AppTabAttachments
