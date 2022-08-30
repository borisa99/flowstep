import { FC } from 'react'

interface Props {
  title: string
  description: string
  className?: string
}

const PageTitle: FC<Props> = (props) => {
  const { title, description, className } = props

  return (
    <div
      className={`flex flex-col min-h-[10.5rem] items-center justify-center ${className}`}
    >
      <h3>{title}</h3>
      <div className="text-gray-700">{description}</div>
    </div>
  )
}

export default PageTitle
