import Project, {
  ImageFullWidth,
  ImageInline,
  ImageMaxWidth,
  ListDisc,
  VideosInline,
  TextWithHeading
} from "../../components/Project";

export default () => (
  <Project id="odysia">
    <ImageFullWidth src="/odysia/hero.png" alt="Odysia landing animation" />
    <TextWithHeading
      title="Role"
      paragraphs={[
        "Designing and building the website, as well as conceptualizing the co-creation aspects with Rasmus Kolbe, author of the book."
      ]}
    />
    <TextWithHeading
      title="Opportunity"
      paragraphs={[
        "Rasmus is a YouTuber by day, turned fantasy writer by night. His day job is interacting with his audience, and he wanted to do the same for the book he is writing. We worked to conceptualize a website where readers would have a chance to learn about and engage in his upcoming book, getting a chance to influence the final story."
      ]}
    />
    <TextWithHeading
      title="Solution"
      paragraphs={[
        "Given that this is a fantasy book, the website was a chance to go all-out on creating an immersive experience. We added animations; the page header slowly opening up the universe, as well as chapters bouncing open. The website is heavy on illustrations as well, as the book will be.",
        "The website is primarily focused on the mobile experience—with the audience of the book using mobile phones as their primary internet device—and features:",
        <ListDisc
          items={[
            "Selected chapters pre-released before the book, so the audience can read and get a feel for the universe,",
            "Drawing tasks assigned to each chapter, making the universe interactive. Selected drawings are recreated by a professional illustrator and included in the book.",
            "A showcase of characters, giving the audience an opportunity to get to know them prior to the book release.",
            "Playful design with a focus on animations and interactions, making the website playful to interact with."
          ]}
        />,
        <VideosInline
          sources={["/odysia/character-loop.mp4", "/odysia/chapter-loop.mp4"]}
        />,
        "Many in the audience are kids, and they aren't always completely comfortable with reading. We added an audio player for chapters and character descripions to be read aloud. When user testing this, we were surprised to see how widely they were used, and even in conjunction with text: many younger users loved to hear Rasmus read the chapters out loud while reading themselves."
      ]}
    />
    <ImageMaxWidth src="/odysia/page.png" alt="Odysia website" />
  </Project>
);
