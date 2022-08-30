import { useEffect, useState, FC } from 'react'
import { createPortal } from 'react-dom'

const Portal: FC = (props) => {
  const { children } = props
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return mounted
    ? createPortal(
        <>{children}</>,
        document.getElementById('portal-container') as HTMLElement
      )
    : null
}

export default Portal
