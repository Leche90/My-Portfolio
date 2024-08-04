import React from "react";

export default function BasicInformation() {
  return (
    <section id="basic-information">
      <div className="container mx-auto px-10 py-20">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-4xl font-medium title-font mb-4 text-white">Basic Information</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Hi, I'm Shaozhuo Xu. I'm a web developer passionate about building interactive and user-friendly web applications.
          </p>
        </div>
      </div>
    </section>
  );
}
