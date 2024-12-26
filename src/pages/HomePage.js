import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import classes from "./HomePage.module.css";
import Portrait from "../components/Portrait";
import ProjectExamples from "../components/ProjectExamples";
import ResumeModal from "../components/ResumeModal";
import aboutthissite from "../components/markdowndocs/Aboutthiswebsite.md";

function HomePage() {
  const [aboutThisWebsiteContent, setaboutThisWebsiteContent] = useState("");

  fetch(aboutthissite)
    .then((response) => response.text())
    .then((text) => setaboutThisWebsiteContent(text))
    .catch((error) => console.error("Error fetching markdown:", error));

  function linkOpen() {
    window.open("https://project.adamtsaidev.com");
  }

  return (
    <div>
      <div className={classes.title}>
        Welcome to my landing page
        <Portrait />
        <ResumeModal linkOpen={linkOpen} />
        <p class="h6 col-8 bg-light text-left text-dark border border-dark rounded mx-auto p-2 mt-2">
          <ReactMarkdown>{aboutThisWebsiteContent}</ReactMarkdown>
        </p>
        <ProjectExamples />
      </div>
    </div>
  );
}

export default HomePage;
