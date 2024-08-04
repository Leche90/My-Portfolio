import React from "react";

const resources = [
  {
    title: "React Documentation",
    image: "/images/react-logo.png",
    summary: "Official React documentation and tutorial.",
    link: "https://reactjs.org/",
  },
  {
    title: "Tailwind CSS",
    image: "/images/tailwind-logo.png",
    summary: "Utility-first CSS framework for rapid UI development.",
    link: "https://tailwindcss.com/",
  },
  {
    title: "JavaScript Info",
    image: "/images/js-logo.png",
    summary: "Modern JavaScript tutorial for beginners and advanced learners.",
    link: "https://javascript.info/",
  },
  {
    title: "Node.js Documentation",
    image: "/images/node-logo.png",
    summary: "Official Node.js documentation and API reference.",
    link: "https://nodejs.org/en/docs/",
  },
  {
    title: "MDN Web Docs",
    image: "/images/mdn-logo.png",
    summary: "Comprehensive resource for web developers, maintained by Mozilla.",
    link: "https://developer.mozilla.org/",
  },
];

export default function Resources() {
  return (
    <section id="resources" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-medium title-font text-white mb-4">Resources</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {resources.map((resource, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <img
                  className="lg:h-48 md:h-36 w-full object-contain mb-6"
                  src={resource.image}
                  alt={resource.title}
                />
                <h2 className="text-xl font-medium title-font text-white mb-4">{resource.title}</h2>
                <p className="leading-relaxed mb-6">{resource.summary}</p>
                <a href={resource.link} className="text-green-400 inline-flex items-center">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
