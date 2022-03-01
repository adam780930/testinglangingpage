import React from 'react';
import classes from './Modal.module.css';
import PdfComponent from './PdfComponent';
import PdfResume from '../resume.pdf';

function Modal({ closeModal }) {

    return (
        <div className={classes.modalBackground} onClick={() => closeModal(false)}>
            <div className={classes.modalContainer} onClick={e => e.stopPropagation()}>
                <div className={classes.titleCloseBtn}>
                    <button onClick={() => closeModal(false)}> x </button>
                </div>
                <div>
                    <h1 className={classes.title}>My Resume</h1>
                </div>
                <div className={classes.body}>
                <PdfComponent />
                </div>
                <div className={classes.footer}>
                <a target="_blank" rel="noopener noreferrer" href={PdfResume}>Download</a>
                </div>
            </div>
        </div>
    );
}

export default Modal;