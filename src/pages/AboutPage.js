import classes from './AboutPage.module.css';
import pfp2 from '../materials/pfp2.jpg';

function AboutPage() {
    return (
        
        <div className={classes.content}>
            <img src={pfp2} 
            className={classes.portrait} alt=""></img>
            
            <header className={classes.text}><span>Hi, I am Adam</span> <br></br>
            A self-taught front-end-developer currently pursuing opportunities to begin my career<br></br>
            in the web developer industry. <br></br>
            I am currently located in Los Angeles, California. I can make websites
            using HTML, CSS, JAVASCRIPT and REACTJS. <br></br>
            I am always looking to learn more and open for all opportunities and projects.
            
            </header>


            
        </div>
    );
}

export default AboutPage;