import { useState, useEffect } from 'react'

const PHONE_WIDTH = 640

export const useDetectMobile = () => {
  const [isMobile, setIsMobile] = useState()
  useEffect(() => {
    const onResize = () => {
      const newIsMobile = window.innerWidth <= PHONE_WIDTH
      if (isMobile !== newIsMobile) {
        setIsMobile(newIsMobile)
      }
    }
    onResize()
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [isMobile])
  return isMobile
}
