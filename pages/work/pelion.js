import Project, {
  ImageFullWidth,
  ImageMaxWidth,
  ImagesScrollable,
  ListDisc,
  TextWithHeading,
} from '../../components/Project'
import InlineLink from '../../components/InlineLink'
import LinkWrapper from '../../components/LinkWrapper'

const Pelion = () => (
  <Project id="pelion">
    <TextWithHeading
      title="Role"
      paragraphs={[
        'Working with founders to create a product roadmap; exploring user needs; collaborating with the team on designing and building the product; responsible for designing and building the marketing website.',
      ]}
    />
    <TextWithHeading
      title="Opportunity"
      paragraphs={[
        "There's great value in mentorships. Many mentorships are formed because mentees are luck to have someone in their network who's happy to help them. However, many young professionals don't necessarily have any prospective mentors in their network. Pelion is working to change that.",
      ]}
    />
    <TextWithHeading
      title="Solution"
      paragraphs={[
        'We created a marketplace for young professionals to explore, discover, reach out and engange in mentorships with senior professionals in tech.',
        'Pelion utilizes an income sharing payment model. Mentees pay a small percentage of their salary to their mentor each month, incentivizing mentors to help mentees advance their career. Mentees have the option to defer payments until reaching a target income, enabling mentors to bet on the talent of tomorrow.',
        <>
          Pelion recently had a sucessful launch on{' '}
          <LinkWrapper type="inline-block">
            <InlineLink
              href="https://www.producthunt.com/posts/pelion"
              target="_producthunt"
              size="sm"
            >
              Product Hunt
            </InlineLink>
          </LinkWrapper>
          .
        </>,
      ]}
    />
    <ImagesScrollable
      sources={[
        { src: '/pelion/ph-explore.png', alt: 'Explore' },
        { src: '/pelion/ph-search.png', alt: 'Search' },
        { src: '/pelion/ph-conversation.png', alt: 'Conversation' },
      ]}
    />
    <TextWithHeading
      title="Process"
      paragraphs={[
        "We initially tackled pairing mentors and mentees as a manual process. For the pairs we made, we created a set of tools for mentorships; e.g. collaborative goal setting, to-do's, and meeting notes.",
        "While the process of creating manual pairs ensured high quality, from a product standpoint it also meant for new mentors and mentees signing up that there was no way of gaining immediate value from the product. Many sign-ups only saw one session. Further, our focus on tools for active mentorships superfluous: many already used other tools for the tasks we addressed, and weren't in the market of changing their habits.",
        'We used these learnings as an opportunity for product development, asking:',
        <ListDisc
          items={[
            'How might we create a product that creates value for the user as early as their first session?',
            'How might we create a product that makes it even to collaborate on active mentorships, even when utilizing external tools?',
          ]}
        />,
        'We addressed the first challenge by creating the public marketplace that Pelion currently is. Mentees are now free to browse mentors within their professions (or vice versa) on the platform from their first signup. This gives them the opportunity to take the first step to working on their career challenges as soon as possible.',
        "We addressed the second challenge by putting a stronger focus on messaging. While digital tools for goal-setting, to-do's and meeting notes are undoubtedly part of many mentorships, users already have personal preferences in these categories. By focusing on messaging, Pelion becomes the core channel for communicating and gaining an overview, and lets users work in the way they most prefer.",
      ]}
    />
    <ImageMaxWidth src="/pelion/page.png" alt="Pelion website" />
  </Project>
)
export default Pelion
