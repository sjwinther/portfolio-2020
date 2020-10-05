import { useContext, useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { isMobile } from 'react-device-detect'
import { Context } from '../store'
import useBreakpoint from '../hooks/useBreakpoint'

import work from '../content/work'
import ArrowBig from '../icons/arrow-big.svg'
import ArrowRight from '../icons/arrow-right.svg'

import SkillBadge from './SkillBadge'

const SectionWork = () => {
  const [project, setProject] = useState(Object.keys(work)[0])
  const [hoveredProject, setHoveredProject] = useState(null)
  const [style, setStyle] = useState({ position: 'relative', zIndex: 0 })

  const [state, dispatch] = useContext(Context)
  const { showOverlay } = state

  const overlayTimer = useRef(null)
  const linkTimer = useRef(null)

  const handleShowOverlay = () => {
    clearTimeout(linkTimer.current)
    overlayTimer.current = setTimeout(() => {
      dispatch({ type: 'SET_OVERLAY', payload: true })
    }, 150)
    setStyle({ ...style, zIndex: 40 })
  }

  const handleHideOverlay = () => {
    clearTimeout(overlayTimer.current)
    dispatch({ type: 'SET_OVERLAY', payload: false })
    linkTimer.current = setTimeout(() => {
      setStyle({ ...style, zIndex: 0 })
    }, 150)
  }

  useEffect(() => {
    if (!isMobile) {
      if (hoveredProject && !showOverlay) {
        handleShowOverlay()
      } else if (!hoveredProject && showOverlay) {
        handleHideOverlay()
      }
    }
  }, [isMobile, hoveredProject])

  return (
    <section className="px-4 pt-8 md:pt-16 mb-16 md:mb-24" style={style}>
      <div className="max-w-5xl flex mx-auto">
        <div className="flex-auto lg:pr-8 sm:pb-4">
          <div
            className={
              (!isMobile && showOverlay ? 'opacity-25 ' : '') +
              'flex items-end transition mb-8'
            }
          >
            <h2 className="whitespace-no-wrap font-bold text-3xl md:text-4xl">
              My work
            </h2>
            <ArrowBig
              style={{ strokeWidth: '2' }}
              className="icon text-5xl md:text-6xl text-pink-600 ml-4"
            />
          </div>
          <ul
            onMouseLeave={() => {
              setHoveredProject(null)
            }}
            className="font-flexa -mx-4"
          >
            {Object.keys(work).map(id => (
              <ListItem
                key={id}
                id={id}
                {...work[id]}
                project={project}
                setProject={setProject}
                hoveredProject={hoveredProject}
                setHoveredProject={setHoveredProject}
                showOverlay={showOverlay}
              />
            ))}
          </ul>
        </div>
        <Link href={'/work/' + work[project].url}>
          <a className="hidden lg:block w-3/5 rounded focus:rounded">
            <div style={{ paddingBottom: '60%' }} className="relative z-10">
              <img
                src={work[project].preview}
                alt={work[project].short}
                className="absolute h-full w-full object-cover rounded shadow"
              />
              {Object.keys(work).map(id => (
                <img
                  key={id}
                  src={work[id].preview}
                  alt={work[id].short}
                  aria-hidden="true"
                  style={{ display: 'none' }}
                />
              ))}
            </div>
          </a>
        </Link>
      </div>
      <div className="hidden bg-indigo-700 bg-orange-700 bg-green-700 bg-teal-700 bg-purple-700" />
    </section>
  )
}

const ListItem = ({
  id,
  short,
  type,
  url,
  skills,
  project,
  setProject,
  hoveredProject,
  setHoveredProject,
  showOverlay,
}) => {
  const { md } = useBreakpoint()
  const isActive = project === id
  const isHovered = hoveredProject === id
  return (
    <li
      onMouseOver={() => {
        setProject(id)
        if (!isMobile) setHoveredProject(id)
      }}
      onFocus={() => setProject(id)}
      className={
        (!isMobile && showOverlay && hoveredProject && !isHovered
          ? 'opacity-25 '
          : '') + 'transition px-2'
      }
    >
      <Link href={'/work/' + url}>
        <a className="flex items-center p-3">
          <div className="flex-auto flex items-center font-medium text-xl">
            {short}
            {skills.map(skill => {
              return (
                <div key={skill} className="ml-4">
                  <SkillBadge skill={skill} size="sm" />
                </div>
              )
            })}
          </div>
          <span
            className={
              (isActive
                ? ' opacity-50 lg:opacity-100'
                : ' opacity-50 lg:opacity-0') +
              ' font-flexa font-medium text-2xl transition'
            }
          >
            →
          </span>
        </a>
      </Link>
    </li>
  )
}
export default SectionWork
