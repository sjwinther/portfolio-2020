export default () => (
  <section className="px-2 py-16">
    <div className="max-w-5xl mx-auto">
      <h1 className="font-black text-5xl mb-8">
        Hi, I'm Sebastian. 👋 I'm a freelance UX designer and frontend
        developer.
      </h1>
      <p className="text-2xl mb-12">
        I sketch products, think products, design products, prototype products,
        and build products – mostly in React. I'm available for freelance work
        from January. Do you want to work together? → Write me an email.
      </p>
      <dl className="flex flex-wrap items-center -m-2">
        <dt className="font-medium m-2">I do:</dt>
        <DescriptionData bgColor="bg-pink-500">Agurker</DescriptionData>
        <DescriptionData bgColor="bg-blue-500">Gulerødder</DescriptionData>
        <DescriptionData bgColor="bg-green-500">Pastinakker</DescriptionData>
        <DescriptionData bgColor="bg-yellow-500">Æbler</DescriptionData>
      </dl>
    </div>
  </section>
);

const DescriptionData = ({ bgColor, children }) => (
  <dd className="inline-flex items-center font-medium text-sm text-gray-900 bg-gray-300 rounded px-3 py-2 m-2">
    <div className={bgColor + " h-4 w-4 rounded-full mr-3"} />
    {children}
  </dd>
);
