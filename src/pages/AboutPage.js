import ReactMarkdown from "react-markdown";
import React, { useState } from "react";
import pfp2 from "../materials/pfp2.jpg";
import aboutme from "../components/markdowndocs/Aboutme.md";

function AboutPage() {
  const [markdownContent, setMarkdownContent] = useState("");

  fetch(aboutme)
    .then((response) => response.text())
    .then((text) => setMarkdownContent(text))
    .catch((error) => console.error("Error fetching markdown:", error));

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
              <div class="text-center">
                <span class="display-3 bg-dark text-light border border-dark rounded">
                  Hi, I am Adam
                </span>
              </div>
              <p class="h4 bg-light text-dark border border-dark rounded px-2 mt-2">
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center h1"></div>
    </div>
  );
}

export default AboutPage;
