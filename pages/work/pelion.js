import Project, {
  ImageFullWidth,
  ImageMaxWidth,
  ImagesScrollable,
  TextWithHeading
} from "../../components/Project";
import InlineLink from "../../components/InlineLink";

export default () => (
  <Project id="pelion">
    <ImageFullWidth
      alt="Grid of product + marketing images"
      bgColor="bg-indigo-700"
    />
    <TextWithHeading
      title="Role"
      paragraphs={[
        "Working closely with the founders to create a product roadmap; understanding user needs; collaborating with the team on designing and building the product; responsible for designing and building the marketing website."
      ]}
    />
    <TextWithHeading
      title="Opportunity"
      paragraphs={[
        "Pelion is about creating career opportunities for young people entering the job market. Pelion started as a recruitment agency focused on those whose merits exceed their credentials, slowly evolved to using mentors in the recruitment process until finally pivoting to becoming a platform for discovering and engaging with mentors."
      ]}
    />
    <TextWithHeading
      title="Solution"
      paragraphs={[
        "Through recruiting we noticed the great value created by mentors in early careers of talented young professionals. We created a marketplace for them to explore, discover, reach out and engange in mentorships with senior professionals in tech.",
        "Pelion utilizes an income sharing payment model. Mentees pay a small percentage of their salary to their mentor each month, incentivizing mentors to help mentees evolve their career. Mentees who cannot afford to pay immediately have the option to defer payments until reaching a target income. This enables mentors can bet on the talent of tomorrow.",
        <>
          Pelion recently had a sucessful launch on{" "}
          <InlineLink
            href="https://www.producthunt.com/posts/pelion"
            target="_producthunt"
          >
            Product Hunt
          </InlineLink>
          .
        </>
      ]}
    />
    <ImagesScrollable
      alt="Product Hunt screenshots, scrollable"
      bgColor="bg-indigo-700"
    />
    <TextWithHeading
      title="Process"
      paragraphs={[
        "Starting from recruiting—where we had manually paired applicants with companies—we initially paired mentors and mentees manually as well. For the pairs we made, we created a set of tools for mentorships; e.g. collaborative goal setting, to-do's, and meeting notes.",
        "While the process of creating manual pairs ensured high quality, from a product standpoint it also meant for new mentors and mentees signing up that there was no way of gaining immediate value from the product. Many sign-ups only saw one session. Further, our focus on tools for active mentorships superfluous: many already used other tools for the tasks we addressed, and weren't in the market of changing their habits."
      ]}
    />
    <ImageMaxWidth
      alt="Sketch: former v new matching"
      bgColor="bg-indigo-700"
    />
    <TextWithHeading
      title="Process, continued"
      paragraphs={[
        "We used these learnings as an opportunity for product development:",
        <ul className="list-disc pl-6">
          <li className="mb-4">
            How might we create a product that creates value for the user as
            early as their first session?
          </li>
          <li>
            How might we create a product that makes it even to collaborate on
            active mentorships, even when utilizing external tools?
          </li>
        </ul>,
        "The first challenge we addressed by creating the public marketplace that Pelion currently is. Mentees are now free to browse mentors within their professions (or vice versa) on the platform from their first signup. This gives them the opportunity to get take the first step to working on their career challenges as soon as possible.",
        "The second challenge we addressed by putting a stronger focus on messaging. While digital tools for goal-setting, to-do's and meeting notes are undoubtedly part of many mentorships, users already have personal preferences in these categories. By focusing on messaging, Pelion becomes the core channel for communicating and gaining an overview, and lets users work in the way they most prefer."
      ]}
    />
    <ImageFullWidth
      alt="Grid of product + marketing images"
      bgColor="bg-indigo-700"
    />
  </Project>
);
