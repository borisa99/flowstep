import { useEffect, RefObject } from 'react'

type Event = MouseEvent | TouchEvent

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  onClickOutside: (event: Event) => void
) => {
  useEffect(() => {
    const handleEvent = (event: Event) => {
      const el = ref.current

      if (!el || el.contains(event.target as Node)) {
        return
      }

      onClickOutside(event)
    }

    document.addEventListener('mousedown', handleEvent)
    document.addEventListener('touchstart', handleEvent)

    return () => {
      document.removeEventListener('mousedown', handleEvent)
      document.removeEventListener('touchstart', handleEvent)
    }
  }, [ref, onClickOutside])
}

export default useClickOutside
