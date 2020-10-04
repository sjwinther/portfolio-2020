import { useEffect, useState } from 'react'
import ArrowSmall from '../icons/arrow-small.svg'
import SayHi from '../icons/say-hi.svg'

import DarkToggle from './DarkToggle'
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
                <InlineLink href="mailto:sebastianwinther@gmail.com" size="sm">
                  sebastianwinther@gmail.com
                </InlineLink>
                <div className="absolute inset-y-0 right-0 flex items-end justify-start">
                  <SayHi
                    style={{ strokeWidth: '2' }}
                    className="absolute left-0 icon text-5xl text-teal-600 ml-2"
                  />
                </div>
              </dd>
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
