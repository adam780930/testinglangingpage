import classes from './HomePage.module.css';
import { useState } from 'react';
import Portrait from '../components/Portrait';
import Modal from '../components/Modal';
import PdfResume from '../materials/resume.pdf';
import projectGrid from '../components/projects';



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
        <div className={classes.title}>
            Welcome to my landing page
            <Portrait />
            <div className={classes.btn}>
                <h2 className={classes.projects} onClick={linkOpen}>Other Projects</h2>
                <h2 className={classes.resume} onClick={downloadResume}>Resume</h2>
            </div>
            <projectGrid />
            {openModal && <Modal closeModal={setOpenModal} />}
            
        </div>
        

    );
}

export default HomePage;