import React, { useState } from "react";
import classes from "./HomePage.module.css";
import Portrait from "../components/Portrait";
import Modal from "../components/Modal";
import PdfResume from "../materials/resume.pdf";
import ProjectExamples from "../components/ProjectExamples";
import Buttons from "../components/Buttons";
import ResumeModal from "../components/ResumeModal";

function HomePage() {
  function linkOpen() {
    window.open("https://project.adamtsaidev.com");
  }

  function downloadResume() {
    window.open(PdfResume);
  }

  function resumeOpen() {
    setOpenModal(true);
  }

  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className={classes.title}>
        Welcome to my landing page
        <Portrait />
        <ResumeModal linkOpen={linkOpen}/>
        <ProjectExamples />
      </div>
    </div>
  );
}

export default HomePage;
