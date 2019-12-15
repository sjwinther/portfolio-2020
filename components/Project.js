import ExternalLink from "../icons/external-link.svg";
import work from "../content/work";

import SkillBadge from "./SkillBadge";

export default ({ id, children }) => {
  const project = work[id];
  const { title, year, publicUrls, skills, bgColor } = project;
  return (
    <main className="px-4 pt-8 md:pt-16">
      <article>
        <div className="max-w-5xl mx-auto mb-16">
          <h1 className="max-w-4xl font-black text-2xl sm:text-3xl md:text-4xl mb-8">
            {title}
          </h1>
          <dl className="-mx-2 mb-8">
            <Definition content={year} />
            {publicUrls.map(url => (
              <Definition key={url} content={url} href={url} />
            ))}
          </dl>
          <div className="flex flex-wrap items-center -mx-2">
            {skills.map(skill => (
              <SkillBadge key={skill} skill={skill} size="lg" />
            ))}
          </div>
        </div>
        {children}
      </article>
    </main>
  );
};

const Definition = ({ content, href }) => (
  <dd className="inline-block font-medium uppercase mx-2 my-1">
    {href ? (
      <a
        href={"https://" + href}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center hover:bg-gray-200 dark-hover:bg-black py-1"
      >
        {content}
        <ExternalLink
          style={{ strokeWidth: "3" }}
          className="icon text-2xl text-gray-600 ml-1"
        />
      </a>
    ) : (
      <div className="py-1">{content}</div>
    )}
  </dd>
);

export const ImageInline = ({ alt, bgColor }) => (
  <div
    style={{ paddingBottom: "56.25%" }}
    className="relative z-10 mb-8 last:mb-0"
  >
    <div
      className={
        bgColor +
        " absolute inset-0 flex items-center justify-center text-white rounded"
      }
    >
      {alt}
    </div>
  </div>
);

export const ImageFullWidth = ({ alt, bgColor }) => (
  <div
    style={{ paddingBottom: "56.25%" }}
    className="relative z-10 mb-16 md:mb-24"
  >
    <div
      className={
        bgColor +
        " absolute inset-0 flex items-center justify-center text-white rounded"
      }
    >
      {alt}
    </div>
  </div>
);

export const ImageMaxWidth = ({ alt, bgColor }) => (
  <div className="max-w-5xl mx-auto mb-16 md:mb-24">
    <div style={{ paddingBottom: "56.25%" }} className="relative z-10">
      <div
        className={
          bgColor +
          " absolute inset-0 flex items-center justify-center text-white rounded"
        }
      >
        {alt}
      </div>
    </div>
  </div>
);

export const ImagesScrollable = ({ alt, bgColor }) => (
  <div className="overflow-x-auto -mx-4 pb-4 mb-12 md:mb-20">
    <ul className="max-w-5xl flex mx-auto">
      {[1, 2, 3].map((image, i) => (
        <li key={i} className="flex-shrink-0 w-full pr-8">
          <div style={{ paddingBottom: "56.25%" }} className="relative z-10">
            <div
              className={
                bgColor +
                " absolute inset-0 flex items-center justify-center text-white rounded"
              }
            >
              {alt}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export const List = ({ items }) => (
  <ul className="list-disc pl-6 mb-8">
    {items.map(item => (
      <li key={item} className="mb-4">
        {item}
      </li>
    ))}
  </ul>
);

export const TextWithHeading = ({ title, paragraphs }) => (
  <section className="max-w-5xl flex flex-wrap items-baseline mx-auto mb-16 md:mb-24">
    <h3 className="w-full md:w-1/4 font-medium text-lg md:text-xl mb-8">
      {title}
    </h3>
    <div className="w-full md:w-3/4">
      {paragraphs.map(paragraph => (
        <p key={paragraph} className="text-lg md:text-xl mb-8 last:mb-0">
          {paragraph}
        </p>
      ))}
    </div>
  </section>
);
