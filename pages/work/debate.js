import Project, {
  ImageFullWidth,
  ImageMaxWidth,
  ImageInline,
  ListDecimal,
  TextWithHeading
} from "../../components/Project";
import InlineLink from "../../components/InlineLink";

export default () => (
  <Project id="debate">
    <ImageFullWidth
      src="/debate/prototype-grid.png"
      alt="Digital debate prototype"
    />
    <TextWithHeading
      title="Role"
      paragraphs={[
        "Researcher and designer. I wrote my thesis on digital debate. I interviewed Danish citizens, facilitated workshops and focus groups, and ultimately designed a prototype for a better digital debate."
      ]}
    />
    <TextWithHeading
      title="Opportunity"
      paragraphs={[
        "Modern political debate is faced with a number of challenges. Parties are losing members, and newspaper sales are steadily declining, while most Danish people are now active on social media. The political debate is moving from traditional, physical arenas to new, online arenas. This poses a challenge: How does society uphold a healthy political debate, as it moves to digital arenas? How does one design a constructive online debate?"
      ]}
    />
    <TextWithHeading
      title="Solution"
      paragraphs={[
        "By first examining thee different digital debate tools through qualitative studies, I designed a digital debate prototype for use within Danish political party, Initiativet. Initiativet has as its goal to create an online space for democratic deliberation, wherefrom the party will draw its policies.",
        "The thesis presents four main findings that are important for creating a tool for digital deliberation:",
        <ListDecimal
          items={[
            "securing correct information and use of external knowledge sources,",
            "accommodating different types of contribution types,",
            "a structure that is understandable as well as flexible,",
            "a system for moderation and securing civility throughout the tool."
          ]}
        />,
        // <ImageInline alt="Main findings, illustrated" bgColor="bg-gray-700" />,
        "The four main findings were used as the starting point of a design proces, and the thesis concludes with a prototype incorporating 11 suggested design proposals addressing the the aforementioned findings.",
        <>
          You can download the thesis{" "}
          <InlineLink
            href="/debate/thesis.pdf"
            target="_thesis"
            size="sm"
            download="Digital Debate Thesis"
          >
            here
          </InlineLink>{" "}
          (it's in Danish), and visit the (still very static) prototype{" "}
          <InlineLink
            href="https://digital-debate.netlify.com"
            target="_prototype"
            size="sm"
          >
            here
          </InlineLink>
          .
        </>
        // <ImageInline alt="Suggestions, illustrated" bgColor="bg-gray-700" />
      ]}
    />
    <ImageMaxWidth src="/debate/page.png" alt="Digital debate prototype" />
  </Project>
);
