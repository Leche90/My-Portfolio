import React from "react";

const setup = {
  vsCode: "VSCode with ESLint, Prettier, and Tailwind CSS IntelliSense extensions.",
  terminal: "Windows Terminal with Oh My Zsh.",
  font: "Fira Code with ligatures enabled.",
};

export default function DeveloperSetup() {
  return (
    <section id="developer-setup" className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-medium title-font text-orange-400 mb-4">Developer Setup</h1>
        </div>
        <div className="flex flex-col text-left w-full mb-4">
          <h2 className="text-xl font-medium title-font text-orange-400 mb-2">VSCode Setup</h2>
          <p className="leading-relaxed text-base text-gray-300">{setup.vsCode}</p>
        </div>
        <div className="flex flex-col text-left w-full mb-4">
          <h2 className="text-xl font-medium title-font text-orange-400 mb-2">Terminal Setup</h2>
          <p className="leading-relaxed text-base text-gray-300">{setup.terminal}</p>
        </div>
        <div className="flex flex-col text-left w-full">
          <h2 className="text-xl font-medium title-font text-orange-400 mb-2">Preferred Editor Font</h2>
          <p className="leading-relaxed text-base text-gray-300">{setup.font}</p>
        </div>
      </div>
    </section>
  );
}
