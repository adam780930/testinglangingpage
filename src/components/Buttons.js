import classes from './Buttons.module.css';

function buttons({linkOpen, downloadResume}) {
    return (
        <div className={classes.btn}>
          <h2 className={classes.projects} onClick={linkOpen}>
            Projects
          </h2>
          <h2 className={classes.resume} onClick={downloadResume}>
            Experiences
          </h2>
        </div>
    );
}

export default buttons;