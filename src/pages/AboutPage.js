import classes from "./AboutPage.module.css";
import pfp2 from "../materials/pfp2.jpg";

function AboutPage() {
  return (
    <div>
      <div class="container-lg">
        <div class="row py-5">
          <div class="col-6">
            <img src={pfp2} className={classes.portrait} alt=""></img>
          </div>

          <div class="col-6 my-auto">
            <div>
              <span class="display-3 bg-dark text-light">Hi, I am Adam</span>
              <p class="h4 bg-light text-dark px-2">
                <br></br>I am a passionate, highly motivated and self-driven
                Full-Stack software engineer proficient in using JavaScript,
                TypeScript, React, Angular, HTML, CSS, Rest API, Node.JS,
                Express, PostgreSQL, and frameworks like Bootstrap.
                <br></br>
                <br></br>I am dedicated to continuous learning and improvement
                in the field of web development. I am always seeking new
                challenges and opportunities to grow. Connect with me on
                LinkedIn, check out my GitHub profile, or view my portfolio to
                see more of my work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
