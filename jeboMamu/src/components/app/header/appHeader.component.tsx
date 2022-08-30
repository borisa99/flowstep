import AppHeaderInfo from './info/appHeaderInfo.component'
import AppHeaderNavigation from './navigation/appHeaderNavigation.component'

const AppHeader = () => {
  return (
    <div className="flex justify-between items-center bg-white text-gray-900 mb-16">
      <AppHeaderInfo />
      <AppHeaderNavigation />
    </div>
  )
}
export default AppHeader
