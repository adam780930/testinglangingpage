import ReactMarkdown from "react-markdown";
import React, { useState, useEffect } from "react";
import pfp2 from "../materials/pfp2.jpg";
import aboutme from '../components/markdowndocs/Aboutme.md'

function AboutPage() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(aboutme)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error("Error fetching markdown:", error));
  }, [aboutme]);

  return (
    <div>
      <div class="container-lg my-auto">
        <div class="row py-5">
          <div class="col-6">
            <img
              src={pfp2}
              class="col-12 bg-light border border-dark rounded"
              alt=""
            ></img>
          </div>

          <div class="col-6 my-auto">
            <div>
              <span class="display-3 bg-dark text-light border border-dark rounded">
                Hi, I am Adam
              </span>
              {/* <p class="h4 bg-light text-dark border border-dark rounded px-2 mt-2">
                I am a passionate, highly motivated and self-driven Full-Stack
                software engineer living in California. My primary dev stack
                are: JavaScript, TypeScript, React, Angular, HTML, CSS, Rest
                API, Node, Express, and PostgreSQL.
                <br></br>
                <br></br>I completed the engineering course with{" "}
                <a href="https://www.chegg.com/skills/" target="_blank">
                  Chegg Skills
                </a>
                (formerly known as Thinkful) in 2023 and briefly worked as a
                JavaScript Software Developer(contracted position) at{" "}
                <a href="https://www.apple.com/" target="_blank">
                  Apple Inc.
                </a>{" "}
                for the development of an internal tool.
                <br></br>
                <br></br>I am dedicated to continuous learning and improvement
                in the field of web development. I am always seeking new
                challenges and opportunities to grow. Connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/adam-yilin-tsai"
                  target="_blank"
                >
                  Linkedin
                </a>
                , check out my{" "}
                <a href="https://github.com/adam780930" target="_blank">
                  GitHub
                </a>{" "}
                profile, or view my portfolio to see more of my work.
              </p> */}
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center h1">
        
      </div>
    </div>
  );
}

export default AboutPage;
