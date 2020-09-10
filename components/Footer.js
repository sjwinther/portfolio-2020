import { useEffect, useState } from 'react'
import { useForm } from '@statickit/react'
import { motion, AnimatePresence } from 'framer-motion'
import SquigglyLine from '../icons/footer.svg'
import Check from '../icons/check.svg'
import ArrowSmall from '../icons/arrow-small.svg'
import SayHi from '../icons/say-hi.svg'

import DarkToggle from './DarkToggle'
import LoadingSpinner from './LoadingSpinner'
import InlineLink from './InlineLink'

const Footer = () => {
  return (
    <footer className="px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap md:flex-no-wrap py-8 md:py-16">
          <div className="w-full flex flex-col justify-end md:pr-8">
            <p className="max-w-md mb-6">
              I design and code at{' '}
              <InlineLink
                href="https://www.zetland.dk/"
                target="_zetland"
                size="sm"
              >
                Zetland
              </InlineLink>
              .<br />I have previously worked with companies like{' '}
              <InlineLink
                href="https://www.pelion.app"
                target="_pelion"
                size="sm"
              >
                Pelion
              </InlineLink>
              {', '}
              <InlineLink
                href="https://www.initiativet.dk"
                target="_initiativet"
                size="sm"
              >
                Initiativet
              </InlineLink>
              {', '}
              <InlineLink
                href="https://www.readwise.io"
                target="_readwise"
                size="sm"
              >
                Readwise
              </InlineLink>
              {', & '}
              <InlineLink
                href="https://www.nord.investments"
                target="_nord"
                size="sm"
              >
                NORD.investments
              </InlineLink>
              .
            </p>
            <dl>
              <dd className="mb-1">Sebastian Winther</dd>
              <dd className="mb-1">Copenhagen, Denmark</dd>
              <dd className="relative inline-block">
                <a
                  href="mailto:sebastianwinther@gmail.com"
                  className="hover:bg-gray-200 dark-hover:bg-black border-b-2 border-gray-400 dark:border-gray-800 rounded-b-none"
                >
                  sebastianwinther@gmail.com
                </a>
                <div className="absolute inset-y-0 right-0 flex items-end justify-start">
                  <SayHi
                    style={{ strokeWidth: '2' }}
                    className="absolute left-0 icon text-5xl text-teal-600 ml-2"
                  />
                </div>
              </dd>
              {/* <div className="-m-1">
              <dd className="inline-block m-1">
                <a
                  href="https://github.com/sjwinther"
                  target="_github"
                  rel="noopener"
                  className="text-lg hover:bg-gray-200 dark-hover:bg-black p-1"
                >
                  <GitHub className="fill-current" />
                </a>
              </dd>
              <dd className="inline-block m-1">
                <a
                  href="https://twitter.com/sebjwinther"
                  target="_twitter"
                  rel="noopener"
                  className="text-lg hover:bg-gray-200 dark-hover:bg-black p-1"
                >
                  <Twitter className="fill-current" />
                </a>
              </dd>
            </div> */}
            </dl>
          </div>
          <div className="flex-shrink-0 self-end order-first md:order-last mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <h3 className="whitespace-no-wrap font-bold text-2xl">
                That's me!
              </h3>
              <ArrowSmall
                style={{ strokeWidth: '2.5' }}
                className="icon text-5xl text-pink-600 -mr-4"
              />
            </div>
            <img
              src="/sebastian.jpg"
              alt="That's me!"
              className="w-40 h-40 rounded"
            />
          </div>
        </div>
        <DarkToggle />
      </div>
    </footer>
  )
}
export default Footer

const Form = () => {
  const [email, setEmail] = useState('')
  const [toast, setToast] = useState(false)
  const [state, submit] = useForm({
    site: '2b52df695624',
    form: 'contact-form',
  })
  const { submitting, succeeded, errors } = state
  useEffect(() => {
    if (succeeded) {
      setToast(true)
      setEmail('')
    }
  }, [succeeded])
  return (
    <>
      <form onSubmit={submit} className="flex text-base -m-2">
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="tim@apple.com"
          required
          className="input w-full max-w-xs m-2"
        />
        <button
          type="submit"
          className="flex-shrink-0 btn btn-primary relative w-28 m-2"
        >
          <span className={succeeded || submitting ? 'text-transparent' : ''}>
            {errors && !!errors.length ? 'Try again' : 'Send along'}
          </span>
          {(succeeded || submitting) && (
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence exitBeforeEnter>
                {succeeded ? (
                  <motion.div
                    key="succeeded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Check
                      style={{ strokeWidth: '4' }}
                      className="icon text-2xl"
                    />
                  </motion.div>
                ) : submitting ? (
                  <motion.div
                    key="submitting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <LoadingSpinner
                      style={{ strokeWidth: '3' }}
                      className="icon text-3xl"
                    />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          )}
        </button>
      </form>
      <Toast show={toast} close={() => setToast(false)} />
    </>
  )
}

const Toast = ({ show, close }) => (
  <div className="fixed inset-x-0 bottom-0 z-20 flex justify-center">
    <AnimatePresence>
      {show && (
        <motion.div
          key="toast"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 32 }}
          onClick={close}
          className="absolute bottom-0 cursor-pointer flex items-center text-white dark:text-black bg-black dark:bg-white rounded px-8 py-4 mb-8"
        >
          You got it! I'll be in touch
          <Check style={{ strokeWidth: '3' }} className="icon text-2xl ml-2" />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)
