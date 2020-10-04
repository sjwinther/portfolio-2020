import { useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Context } from '../store'

import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Wrapper = ({ children }) => {
  const [state, dispatch] = useContext(Context)
  const { showOverlay } = state

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <AnimatePresence>
        {showOverlay && (
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

export default Wrapper
