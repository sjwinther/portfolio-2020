import Peace from '../icons/peace.svg'

import InlineLink from './InlineLink'
import LinkWrapper from './LinkWrapper'
import SkillBadge from './SkillBadge'

const SectionHero = () => (
  <section className="px-4 pt-8 md:pt-16 mb-16 md:mb-24">
    <div className="max-w-5xl mx-auto">
      <div className="font-bold text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-12">
        <h1 className="inline">
          Hey, I'm Sebastian.
          <Peace
            style={{ strokeWidth: '2', transform: 'translateY(-8px)' }}
            className="inline-block icon text-3xl sm:text-4xl md:text-5xl text-yellow-600"
          />
          I'm a digital product person.
        </h1>{' '}
        <p className="inline font-flexa">
          I'm formally educated in UX research and UI design, and self taught in
          frontend development. I currently work at the Danish digital newspaper{' '}
          <LinkWrapper type="inline-block">
            <InlineLink
              href="https://www.zetland.dk/"
              target="_zetland"
              size="lg"
            >
              Zetland
            </InlineLink>
          </LinkWrapper>
          .
        </p>
      </div>
      <div className="font-flexa flex flex-wrap items-center -m-1 md:-m-2">
        <div className="font-medium text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-500 m-1 md:m-2">
          I work with
        </div>
        <SkillBadge skill="ux" size="lg" />
        <SkillBadge skill="web" size="lg" />
        <SkillBadge skill="product" size="lg" />
        <SkillBadge skill="code" size="lg" />
      </div>
    </div>
  </section>
)
export default SectionHero
