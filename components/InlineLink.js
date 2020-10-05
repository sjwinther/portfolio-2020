import { useContext, useState, useRef } from 'react'
import { Context } from '../store'

const InlineLink = ({ href, target, download, children }) => (
  <a
    href={href}
    target={typeof target === 'string' ? target : target ? '_blank' : undefined}
    rel={target ? 'noopener' : undefined}
    download={download || undefined}
    className="relative inline-flex items-center border-b-2 border-gray-400 dark:border-gray-800 rounded-b-none"
  >
    {children}
  </a>
)

export default InlineLink
