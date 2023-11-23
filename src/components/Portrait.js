import classes from './Portrait.module.css';
import pfp from '../materials/pfp.jpg';

function Portrait() {
    return (
        <div className={classes.title}>
            <img src={pfp} className={classes.portrait} alt=""></img>
        </div>
    );
}

export default Portrait;