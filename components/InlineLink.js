import { useContext, useState, useRef } from 'react'
import { Context } from '../store'

import Airplane from '../icons/airplane.svg'
import AirplaneFly from '../icons/airplane-fly.svg'

const InlineLink = ({
  href,
  target,
  download,
  size,
  type,
  color,
  children,
}) => {
  const [hover, setHover] = useState(false)
  const [style, setStyle] = useState({ zIndex: 0 })

  const [state, dispatch] = useContext(Context)
  const { showOverlay } = state

  const overlayTimer = useRef(null)
  const linkTimer = useRef(null)

  const handleMouseOver = () => {
    clearTimeout(linkTimer.current)
    overlayTimer.current = setTimeout(() => {
      setHover(true)
      dispatch({ type: 'SET_OVERLAY', payload: true })
    }, 150)
    setStyle({ zIndex: 40 })
  }

  const handleMouseLeave = () => {
    clearTimeout(overlayTimer.current)
    setHover(false)
    dispatch({ type: 'SET_OVERLAY', payload: false })
    linkTimer.current = setTimeout(() => {
      setStyle({ zIndex: 0 })
    }, 150)
  }

  const iconProps = {
    style: {
      strokeWidth: '3',
      transform: type === 'send' && hover ? 'scale(1.1)' : 'scale(1)',
    },
    className:
      (size === 'sm'
        ? 'text-2xl ml-1 '
        : size === 'lg'
        ? 'text-4xl ml-1 '
        : 'text-3xl ml-2 ') +
      (color ? color + ' ' : 'text-gray-600 ') +
      'icon',
  }
  return (
    <a
      href={href}
      target={
        typeof target === 'string' ? target : target ? '_blank' : undefined
      }
      rel={target ? 'noopener' : undefined}
      download={download || undefined}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex items-center border-b-2 border-gray-400 hover:border-transparent dark:border-gray-800 rounded-b-none"
      style={style}
    >
      {children}
    </a>
  )
}
export default InlineLink
