import { useContext, useState, useRef } from 'react'
import { isMobile } from 'react-device-detect'
import { Context } from '../store'

const LinkWrapper = ({ type, children }) => {
  const [style, setStyle] = useState({ position: 'relative', zIndex: 0 })
  const [state, dispatch] = useContext(Context)
  const { showOverlay } = state

  const overlayTimer = useRef(null)
  const linkTimer = useRef(null)

  const handleMouseOver = () => {
    clearTimeout(linkTimer.current)
    overlayTimer.current = setTimeout(() => {
      dispatch({ type: 'SET_OVERLAY', payload: true })
    }, 150)
    setStyle({ ...style, zIndex: 40 })
  }

  const handleMouseLeave = () => {
    clearTimeout(overlayTimer.current)
    dispatch({ type: 'SET_OVERLAY', payload: false })
    linkTimer.current = setTimeout(() => {
      setStyle({ ...style, zIndex: 0 })
    }, 150)
  }

  return (
    <span
      onMouseOver={!isMobile ? handleMouseOver : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
      className={type}
      style={style}
    >
      {children}
    </span>
  )
}

export default LinkWrapper
