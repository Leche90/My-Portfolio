import React from "react";

const projects = [
  {
    title: "Construction Management App",
    description: `
      Developed a responsive Construction Management System app using HTML5, CSS, PHP and React, ensuring cross-browser compatibility and an intuitive user interface. Integrated inline form validation with JavaScript to ensure accurate data input, provide real-time error messages, and improve overall data integrity and user experience.`,
    image: "/images/CMS.png",
    // link: "https://github.com/sxu33", 
    techList: ["HTML5", "CSS", "React", "PHP"],
    date: "August 2024"
  },
  {
    title: "Food App",
    description: `
      Developed a Food App using PHP and MySQL, implementing a secure user registration and login system with session handling and CAPTCHA integration to protect user data. Streamlined dependency management with Composer and maintained version control using Git, enhancing application stability and development efficiency.`,
    image: "/images/Food.png",
    // link: "https://github.com/sxu33", 
    techList: ["PHP", "MySQL", "CAPTCHA", "Composer", "Git"],
    date: "March 2024 - April 2024"
  },
  {
    title: "Portfolio Website",
    description: `
      Built a deployment pipeline using Docker, and React, streamlining the code delivery process and reducing deployment times. 
      Developed an optimized web app with React, Docker, and Node.js, showcasing the ability to create, test, and deploy applications, 
      and ensuring continuous integration and delivery (CI/CD).`,
    image: "/images/portfolio-website.jpg",
    // link: "https://github.com/sxu33", 
    techList: ["React", "Docker", "Node.js"],
    date: "Expected August 2024"
  }
];

export default function Work() {
  return (
    <section id="work" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-medium title-font mb-4 text-white">Work</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <img
                  className="lg:h-48 md:h-36 w-full object-contain mb-6"
                  src={project.image}
                  alt={project.title}
                />
                <h2 className="text-xl font-medium title-font text-white mb-2">{project.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{project.date}</p>
                <p className="leading-relaxed mb-6">{project.description}</p>
                <a href={project.link} className="text-green-400 inline-flex items-center">
                  Learn More
                </a>
                <div className="mt-4">
                  {project.techList.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
