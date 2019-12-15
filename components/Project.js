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

export const VideosInline = ({ sources }) => (
  <div className="relative z-10 flex -mx-4 mb-8 last:mb-0">
    {sources.map(src => (
      <div key={src} className="w-1/2 px-4">
        <video
          width="100%"
          preload="auto"
          playsInline={true}
          loop={true}
          autoPlay={true}
          muted={true}
          className="rounded shadow"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    ))}
  </div>
);

export const ImageFullWidth = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="relative z-10 rounded shadow mb-16 md:mb-24"
  />
);

export const ImagesFullWidth = ({ sources }) => (
  <div className="relative z-10 flex flex-col md:flex-row -mx-2 mb-16 md:mb-24">
    {sources.map(({ src, alt }) => (
      <div key={src} className="flex-auto m-2">
        <img src={src} alt={alt} className="rounded shadow mb-2" />
        <p className="text-center text-gray-600 dark:text-gray-600">{alt}</p>
      </div>
    ))}
  </div>
);

export const ImageMaxWidth = ({ src, alt, bgColor }) => (
  <div className="max-w-5xl mx-auto mb-16 md:mb-24">
    <img src={src} alt={alt} className="relative z-10 rounded shadow" />
  </div>
);

export const ImagesScrollable = ({ sources }) => (
  <div className="-mx-4 px-4 overflow-x-auto mb-12 md:mb-20">
    <ul className="max-w-5xl h-80 md:h-120 flex mx-auto">
      {sources.map(({ src, alt }) => (
        <li key={alt} className="flex-shrink-0 h-full pb-4 pr-4">
          <img
            src={src}
            alt={alt}
            className="relative z-10 h-full rounded shadow"
          />
        </li>
      ))}
    </ul>
  </div>
);

export const ListDecimal = ({ items }) => (
  <ol>
    {items.map((item, i) => (
      <li key={item} className="mb-4">
        {i + 1 + ") " + item}
      </li>
    ))}
  </ol>
);

export const ListDisc = ({ items }) => (
  <ul className="list-disc pl-6">
    {items.map(item => (
      <li key={item} className="mb-4">
        {item}
      </li>
    ))}
  </ul>
);

export const TextWithHeading = ({ title, paragraphs }) => (
  <section className="max-w-5xl flex flex-wrap items-baseline mx-auto mb-8 md:mb-16">
    <h3 className="w-full md:w-1/4 font-medium text-lg md:text-xl mb-8">
      {title}
    </h3>
    <div className="w-full md:w-3/4 leading-normal text-lg md:text-xl">
      {paragraphs.map((paragraph, i) => {
        if (typeof paragraph === "string")
          return (
            <p key={i} className="mb-8">
              {paragraph}
            </p>
          );
        return (
          <div key={i} className="mb-8">
            {paragraph}
          </div>
        );
      })}
    </div>
  </section>
);
