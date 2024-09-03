import React from "react";
import classes from "./Modal.module.css";
import PdfComponent from "./PdfComponent";
import PdfResume from "../materials/resume.pdf";

function Modal({ closeModal }) {
  return (
    <div class="container">
      <div class="modal-content">
        <div  onClick={() => closeModal(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <div>
              <button onClick={() => closeModal(false)}> x </button>
            </div>
            <div>
              <h1>My Resume</h1>
            </div>
            <div class="center">
              <PdfComponent />
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href={PdfResume}>
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
