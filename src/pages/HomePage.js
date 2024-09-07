import React, { useState } from "react";
import classes from "./HomePage.module.css";
import Portrait from "../components/Portrait";
import Modal from "../components/Modal";
import PdfResume from "../materials/resume.pdf";
import ProjectExamples from "../components/ProjectExamples";
import Buttons from "../components/Buttons";

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
        <Buttons linkOpen={linkOpen} downloadResume={resumeOpen} />
        <div className={classes.grid}>
          {openModal && <Modal closeModal={setOpenModal} />}
          <ProjectExamples />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
