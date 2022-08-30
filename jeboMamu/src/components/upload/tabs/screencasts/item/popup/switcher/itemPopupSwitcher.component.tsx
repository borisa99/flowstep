import Icon from "@/components/elements/Icon/icon.component"

const ItemPopupSwitcher = () => {
  return (
    <div className="flex absolute bottom-2 left-[calc(50%_-_100px)] justify-evenly items-center bg-gray-100 w-24 h-8 rounded-full text-sm cursor-pointer">
      <Icon icon="Caret-left" className="text-2xl font-bold" />
      <span>2 / 3</span>
      <Icon icon="Caret-right" className="text-2xl font-bold" />
    </div>
  )
}

export default ItemPopupSwitcher
