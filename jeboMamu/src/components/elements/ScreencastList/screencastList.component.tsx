import { FC } from 'react'

const headers = ['Video', 'Flows', 'Components']

const ScreencastList: FC = (props) => {
  const { children } = props

  return (
    <div>
      <div className="grid grid-cols-3 mt-8">
        {headers.map((header) => (
          <div
            key={header}
            className="text-base text-gray-900 font-bold py-4 first-of-type:pl-10 last-of-type:pr-10"
          >
            {header}
          </div>
        ))}
        <hr className="mx-2 col-span-3 border-gray-200" />
      </div>
      {children}
    </div>
  )
}

export default ScreencastList
