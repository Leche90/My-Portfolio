import React from "react";
import BasicInformation from "./components/BasicInformation";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Resources from "./components/Resources";
import DeveloperSetup from "./components/DeveloperSetup";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import "./index.css";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <BasicInformation />
      <Work />
      <Skills />
      <Resources />
      <DeveloperSetup />
      <Contact />
    </main>
  );
}
