import React from "react";

const skills = {
  description: "Proficient in various languages and frameworks.",
  languagesFrameworks: ["HTML/CSS", "JavaScript", "Java", "SQL", "PHP", "Python", "Ruby", "TypeScript", "React", "Node.js", "Flask"],
  tools: ["Docker", "Git", "AWS", "RESTful APIs", "AJAX", "Composer"],
};

export default function Skills() {
  return (
    <section id="skills" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-medium title-font text-white mb-4">Skills</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{skills.description}</p>
        </div>
        <div className="flex flex-col text-left w-full mb-12">
          <h2 className="text-2xl font-medium title-font text-white mb-4">Languages/Frameworks</h2>
          <div className="flex flex-wrap -m-2">
            {skills.languagesFrameworks.map((item, index) => (
              <div key={index} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <span className="title-font font-medium text-white">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col text-left w-full">
          <h2 className="text-2xl font-medium title-font text-white mb-4">Tools</h2>
          <div className="flex flex-wrap -m-2">
            {skills.tools.map((item, index) => (
              <div key={index} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <span className="title-font font-medium text-white">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
