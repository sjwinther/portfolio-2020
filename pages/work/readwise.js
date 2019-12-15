import Project, {
  ImagesFullWidth,
  ImagesScrollable,
  TextWithHeading
} from "../../components/Project";

export default () => (
  <Project id="readwise">
    <TextWithHeading
      title="Role"
      paragraphs={["Product design in collaboration with the Readwise team."]}
    />
    <TextWithHeading
      title="Opportunity"
      paragraphs={[
        "For people who read a lot, in can be hard to retain every insight. Readwise helps you stay engaged with your books and articles, by feeding back to you the best highlights, you've read. Because of their laser-sharp focus on helping users get the most out of what you read, Readwise asked me to help them optimize their design to best acommodate that vision."
      ]}
    />
    <ImagesFullWidth
      sources={[
        { src: "/readwise/readwise-old.png", alt: "Former Readwise design" },
        { src: "/readwise/readwise-new.png", alt: "New Readwise design" }
      ]}
    />
    <TextWithHeading
      title="Solution"
      paragraphs={[
        "Every day, Readwise users go through their daily highlights. I worked to de-clutter the experience of the highlight view by introducing a stronger visual hierarchy, lifting the highlight from the rest of the page and putting it front and center. Action colors were dimmed so as to not steal focus from the highlight.",
        "We created a product experience where the platform was secondary to the highlight. Bookmarking, note taking and sharing were all there when needed, but as small distractions as possible when not—rendering the user with complete silence to engage with their highlight."
      ]}
    />
    <ImagesScrollable
      sources={[
        { src: "/readwise/highlight.png", alt: "Highlight, desktop" },
        { src: "/readwise/highlight-mobile.png", alt: "Highlight, mobile" },
        { src: "/readwise/preferences.png", alt: "Preferences, desktop" },
        { src: "/readwise/preferences-mobile.png", alt: "Preferences, mobile" },
        { src: "/readwise/library.png", alt: "Library, desktop" },
        { src: "/readwise/library-mobile.png", alt: "Library, mobile" }
      ]}
    />
  </Project>
);
