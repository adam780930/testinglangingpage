import classes from './HomePage.module.css';
import { useState } from 'react';
import Portrait from '../components/Portrait';
import Modal from '../components/Modal';
import PdfResume from '../materials/resume.pdf';



function HomePage() {
    function linkOpen() {
        window.open("https://adam780930.github.io");
    }

    function downloadResume() {
        window.open(PdfResume);
    }

    function resumeOpen() {
        setOpenModal(true);
    }

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className={classes.title}>
            Welcome to my test page
            <Portrait />
            <div className={classes.btn}>
                <h2 className={classes.projects} onClick={linkOpen}>Projects</h2>
                <h2 className={classes.resume} onClick={downloadResume}>Resume</h2>
            </div>
            {openModal && <Modal closeModal={setOpenModal} />}
        </div>

    );
}

export default HomePage;