import classes from "./AboutPage.module.css";
import pfp2 from "../materials/pfp2.jpg";

function AboutPage() {
  return (
    <div className={classes.content}>
      <img src={pfp2} className={classes.portrait} alt=""></img>

      <header className={classes.text}>
        <span>Hi, I am Adam</span> <br></br>I am a passionate, highly motivated
        and self-driven Full-Stack software engineer proficient in using
        JavaScript, React, HTML, CSS, Rest API, Node.JS, Express,
        PostgreSQL, and frameworks like Bootstrap. <br></br>
        <p1></p1><br></br>I am eagerly seeking
        new challenges and exciting opportunities to apply my development
        skills, contributing to innovative and impactful projects. Please do not
        hesitate to reach out to me if you believe I would be a valuable
        addition to your team.
      </header>
    </div>
  );
}

export default AboutPage;
