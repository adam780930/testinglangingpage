import classes from './Portrait.module.css'

function Portrait() {
    return (
        <div className={classes.title}>
            <img src='https://i.redd.it/jqt9q5252uj71.jpg' className={classes.portrait} alt=""></img>
        </div>
    );
}

export default Portrait;