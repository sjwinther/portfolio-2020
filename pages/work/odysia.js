import Project, {
  ImageFullWidth,
  ImageInline,
  ImageMaxWidth,
  List,
  TextWithHeading
} from "../../components/Project";

export default () => (
  <Project id="odysia">
    <ImageFullWidth alt="Odysia landing animation" bgColor="bg-orange-700" />
    <TextWithHeading
      title="Role"
      paragraphs={[
        "Designing and building the page. A lot of conceptualizing with Rasmus."
      ]}
    />
    <TextWithHeading
      title="Opportunity"
      paragraphs={[
        "Rasmus is a YouTuber by day, turned fantasy writer by night. His day job is interacting with his audience, and he wanted to do the same for the book. We worked to conceptualize a website where readers would have a chance to learn about and engage in his upcoming book, getting a chance to influence the final story."
      ]}
    />
    <TextWithHeading
      title="Solution"
      paragraphs={[
        "Given that this is a fantasy book, the website was a chance to go all-out on making an immersive website. We focused on lots of animations, from being drawn into the universe by the header, or having the chapters bounce open. Heavy on illustrations as well, as the book will be.",
        "Much of the audience are young, and aren't the best at reading, so we added read aloud players for all text. When user testing this, we were surprised to see how widely they were used, and even in conjunction with text: many younger users loved to hear Rasmus read the chapters out loud while reading themselves.",
        <ImageInline
          alt="Two-three Mobile screenshots, animated with audio players"
          bgColor="bg-gray-700"
        />,
        "We  worked a lot on how to do that, ultimately coming up with a concept of an interactive marketing website. The website is primarily focused on the mobile experience—with the audience of the book using mobile phones as their primary internet device—and features:",
        <List
          items={[
            "Selected chapters pre-released before the book, so the audience can read and get a feel for the universe,",
            "Drawing tasks assigned to each chapter, making the universe interactive. Selected drawings are recreated by a professional illustrator and included in the book.",
            "A showcase of characters, giving the audience an opportunity to get to know them prior to the book release.",
            "Playful design with a focus on animations and interactions, making the website playful to interact with."
          ]}
        />
      ]}
    />
    <ImageMaxWidth
      alt="Whole page, as is, long screenshot"
      bgColor="bg-orange-700"
    />
  </Project>
);
