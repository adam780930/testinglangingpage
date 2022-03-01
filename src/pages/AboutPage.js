import classes from './AboutPage.module.css';
// import Portrait from '../components/Portrait';

function AboutPage() {
    return (
        
        <div className={classes.title}>
            <img src='https://i.redd.it/jqt9q5252uj71.jpg' className={classes.portrait} alt=""></img>
            <span className={classes.text}>
                Hi, I am Adam
            </span>
            <p className={classes.text2}>A self-taught front-end-developer currently pursuing opportunities
            to begin my career in the web developer industry.
            </p>
            
        </div>
    );
}

export default AboutPage;