import ContactmeForm from "../components/ContactmeForm";
import classes from "./ContactPage.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactPage() {
  return (
    <section>
      <ContactmeForm />
      <div className={classes.iconContainer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/adam780930"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className={classes.github}
          ></FontAwesomeIcon>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/adam-yilin-tsai"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className={classes.linkedin}
          ></FontAwesomeIcon>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/adam-yilin-tsai"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className={classes.linkedin}
          ></FontAwesomeIcon>
        </a>
      </div>
    </section>
  );
}

export default ContactPage;
