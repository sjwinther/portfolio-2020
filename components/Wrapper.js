import { useEffect, useContext } from 'react'
import { withRouter } from 'next/router'
import { isMobile } from 'react-device-detect'
import { motion, AnimatePresence } from 'framer-motion'
import { Context } from '../store'

import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Wrapper = ({ children, router }) => {
  const [state, dispatch] = useContext(Context)
  const { showOverlay } = state
  const { pathname } = router

  useEffect(() => {
    dispatch({ type: 'SET_OVERLAY', payload: false })
  }, [pathname])

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <AnimatePresence>
        {!isMobile && showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed z-30 inset-0 bg-gray-100 dark:bg-gray-900 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default withRouter(Wrapper)
