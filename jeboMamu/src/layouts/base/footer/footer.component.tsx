import FooterInfo from './info/footerInfo.component'
import FooterNavigation from './navigation/footerNavigation.component'
import FooterPlatfom from './platofm/footerPlatform.component'

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-footer w-full bg-gray-50">
      <div className="w-5/6 max-w-[1024px]">
        <div className="grid grid-cols-4 text-sm ">
          <FooterInfo />
          <div></div>
          <FooterNavigation />
          <FooterPlatfom />
        </div>
      </div>
    </div>
  )
}

export default Footer
