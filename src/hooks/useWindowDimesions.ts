import { useState, useEffect } from 'react'
/**
 * Hook for get window browser dimensions
 * @return {number|null}
 */
export default function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined'
  /**
   * Get windows dimensions
   * @return {
   * width: number | null
   * height: number | null
   * }
   */
  function getWindowDimensions(): {
    width: number | null
    height: number | null
    } {
    const width = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight : null
    return {
      width,
      height,
    }
  }

  const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions(),
  )

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow])

  return windowDimensions
}
