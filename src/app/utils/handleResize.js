'use client'
import { useState, useEffect } from 'react'

export const UseWindowWidth = ({ children, minWidth }) => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () =>
      setWindowWidth(window.innerWidth)

    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () =>
      window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {windowWidth > minWidth
        && children
      }
    </>
  )
}
