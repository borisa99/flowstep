import Battery from '@/assets/images/svg/battery.svg'
import Wifi from '@/assets/images/svg/wifi.svg'
import MobileSignal from '@/assets/images/svg/mobile-signal.svg'

const Skeleton = () => (
  <>
    <div className="col-span-6 flex justify-end">
      <div className="max-w-[375px]  aspect-9/19.5 rounded-xl relative flex justify-center bg-gray-100 border-1 border-gray-200">
        <div className="flex w-full h-fit px-5 pt-3.5 gap-1">
          <div className="text-sm font-semibold text-gray-500">9:41</div>
          <div className="grow" />
          <MobileSignal />
          <Wifi />
          <Battery />
        </div>
        <div className="absolute w-[40%] h-[5px] bg-gray-500 bottom-2 rounded-[2.5px]" />
      </div>
    </div>
    <div className="col-span-5 pl-8 overflow-hidden flex flex-col pt-9 animate-pulse">
      <div className="bg-gray-100 w-60 h-6 rounded-xl" />
      <div className="mt-4 flex gap-4">
        <div className="h-3.5 w-20 bg-gray-100 rounded-lg" />
        <div className="h-3.5 w-20 bg-gray-100 rounded-lg" />
      </div>
      <div className="mt-9 flex gap-3">
        <div className="h-10 w-28 bg-gray-100 rounded-lg" />
        <div className="h-10 w-28 bg-gray-100 rounded-lg" />
        <div className="h-10 w-28 bg-gray-100 rounded-lg" />
      </div>
    </div>
  </>
)

export default Skeleton
