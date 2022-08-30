import { useLayoutEffect, RefObject, useState } from 'react'

interface OveflowCheckResult {
  oveflowIndex?: number | null
}

const useCheckOveflow = (
  containerRef: RefObject<HTMLDivElement>,
  maxContainerWithPercentage: number,
  className: string
): OveflowCheckResult => {
  const [indexOfOveflow, setIndexOfOveflow] = useState<number | null>()
  useLayoutEffect(() => {
    // Get all child elements by class name
    const flowItems = Array.prototype.slice.call(
      document.querySelectorAll(className)
    )

    // Get container with - without oveflow part
    let containerWidth = containerRef.current?.offsetWidth
    if (containerWidth) {
      // Calculate container with based on max-width percentage
      containerWidth = containerWidth * maxContainerWithPercentage

      // loop the array and divide each child width from parent, find breaking one
      for (let i = 0; i < flowItems.length; i++) {
        const flow = flowItems[i]
        containerWidth = containerWidth - flow.offsetWidth

        if (containerWidth <= 0) {
          setIndexOfOveflow(i)
          break
        } else if (i === flowItems.length - 1) {
          setIndexOfOveflow(null)
        }
      }
    }
  }, [containerRef, maxContainerWithPercentage, className])
  return {
    oveflowIndex: indexOfOveflow,
  }
}
export default useCheckOveflow
