import { FunctionComponent } from 'react'

type Props = {
  icon: string
  className?: string
}

const Icon: FunctionComponent<Props> = (props) => {
  return <span className={`icon-${props.icon} ${props.className}`} />
}

export default Icon
