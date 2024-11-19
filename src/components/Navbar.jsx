import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-black md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-orange-400 mb-4 md:mb-0">
          <a href="#basic-information" className="ml-3 text-xl">
            Lanzema Leche
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-orange-500 flex flex-wrap items-center text-base justify-center">
          <a href="#work" className="mr-5 hover:text-orange-400">
            My Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-orange-400">
            Skills
          </a>
          <a href="#resources" className="mr-5 hover:text-orange-400">
            Resources
          </a>
          <a href="#developer-setup" className="mr-5 hover:text-orange-400">
            Developer Setup
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-base mt-4 md:mt-0 text-white">
          Contact
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
