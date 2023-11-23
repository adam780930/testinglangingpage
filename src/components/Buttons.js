import classes from './Buttons.module.css';

function buttons () {
    return (
        <div className={classes.btn}>
            <h2 className={classes.projects}>Projects</h2>
            <h2 className={classes.resume}>Resume</h2>
        </div>
    );
}

export default buttons;