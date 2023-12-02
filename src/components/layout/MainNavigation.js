import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">AT</Link>

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
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
