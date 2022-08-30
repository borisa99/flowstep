import { FC, useEffect, useRef } from 'react'
import useCheckOveflow from '@/hooks/use-check-oveflow/use-check-overflow'

interface Props {
  title: string
  list: { id: string; title: string }[]
}

const ScreencastOveflowColumn: FC<Props> = ({ title, list }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { oveflowIndex } = useCheckOveflow(
    containerRef,
    0.8,
    `.${title}-column-item`
  )
  useEffect(() => {
    console.log(oveflowIndex)
  }, [oveflowIndex])
  return (
    <div
      className="flex group items-center text-base  my-auto whitespace-nowrap relative h-full"
      ref={containerRef}
    >
      <div className="max-w-[80%] text-gray-700 font-normal mr-1 ">
        {list.slice(0, oveflowIndex ?? list.length).map((listItem, index) => (
          <span key={listItem.id} className={`${title}-column-item`}>
            {listItem.title +
              (list.slice(0, oveflowIndex ?? list.length).length - 1 !==
                index && ', ')}
          </span>
        ))}
      </div>
      {oveflowIndex && (
        <>
          <span className="font-bold">
            {list.length - list.slice(0, oveflowIndex).length} more
          </span>
          <div className="absolute right-0 group-hover:opacity-100 opacity-0 top-17 bg-black text-white text-sm rounded-4 px-2 py-1 z-20">
            {
              // Display all list if there are overflown
              list.slice(oveflowIndex).map((listItem) => (
                <div key={listItem.id}>{listItem.title}</div>
              ))
            }
          </div>
        </>
      )}
    </div>
  )
}

export default ScreencastOveflowColumn
