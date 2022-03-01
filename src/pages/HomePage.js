import classes from './HomePage.module.css';
import { useState } from 'react';
import Portrait from '../components/Portrait';
import Modal from '../components/Modal';



function HomePage() {
    function resumeOpen() {
        setOpenModal(true);
    }

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className={classes.title}>
            Welcome to my landing page
            <Portrait />
            <div className={classes.btn}>
                <h2 className={classes.projects}>Projects</h2>
                <h2 className={classes.resume} onClick={resumeOpen}>Resume</h2>
            </div>
            {openModal && <Modal closeModal={setOpenModal}/>}
        </div>

    );
}

export default HomePage;