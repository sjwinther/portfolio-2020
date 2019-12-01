import { BookOpen, Layout, Code, Smartphone } from "react-feather";

export default () => (
  <section className="px-4 py-8 md:py-16">
    <div className="max-w-5xl mx-auto">
      <h1 className="font-black text-3xl md:text-5xl mb-8">
        Hi, I'm Sebastian. 👋 I'm a freelance UX designer and frontend
        developer.
      </h1>
      <p className="text-lg md:text-2xl mb-12">
        I sketch products, think products, design products, prototype products,
        and build products – mostly in React. I'm available for freelance work
        from January. Do you want to work together? Write me an email.
      </p>
      <dl className="flex flex-wrap items-center -m-2">
        <dt className="font-medium text-lg m-2">I do:</dt>
        <DescriptionData
          icon={<BookOpen />}
          color="text-pink-500"
          title="UX research"
        />
        <DescriptionData
          icon={<Layout />}
          color="text-blue-500"
          title="UI design"
        />
        <DescriptionData
          icon={<Smartphone />}
          color="text-green-500"
          title="App design"
        />
        <DescriptionData
          icon={<Code />}
          color="text-yellow-500"
          title="Frontend development"
        />
      </dl>
    </div>
  </section>
);

const DescriptionData = ({ icon, color, title }) => (
  <dd className="inline-flex items-center font-medium bg-gray-800 rounded px-4 py-3 m-2">
    <div className={color + " text-xl mr-4"}>{icon}</div>
    <div>{title}</div>
  </dd>
);
