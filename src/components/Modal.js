import React from "react";

function Modal({ closeModal }) {
  return (
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Experiences</h3>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" onClick={() => closeModal(false)}>
              &times;
            </span>
          </button>
        </div>
        <div class="modal-body text-left">
          <h4>
            Technical Skills: <br></br>
          </h4>
          <hr></hr>
          <p class="h6">
            Frontend: TypeScript, JavaScript, React.js, Angular.js, HTML5, CSS3,
            Flexbox, Tailwind CSS, and Bootstrap<br></br>
            Backend: Node.js, Express.js, RESTful API, and PostgreSQL <br></br>
            Tools: Mocha, Chai, Knex, Git, GitHub, Node Package Manager,
            DBeaver, Postman, Visual Studio Code <br></br>
            Additional Skills: Mandarin, Japanese
          </p>
          <br></br>
          <h4>
            Work Experiences: <br></br>
          </h4>
          <hr></hr>
          <p class="h6">
            Apple Inc. - Cuppertino, CA (01/2024 – 06/2024) <br></br>
            JavaScript Software Developer (Six-Month Career Experience Position)
            <br></br>● Developed and maintained in-house applications to
            streamline the request submission process. <br></br>● Debugged code
            to ensure optimal performance and functionality. <br></br>●
            Implemented numerous features following industry best practices to
            create scalable and efficient solutions. <br></br>● Collaborated in
            code reviews and provided feedback to improve overall code quality
            and maintainability. <br></br>
            ●Presented in-house applications to various departments,
            highlighting their workflow-enhancing benefits. <br></br>
            <br></br>
            Thinkful - Remote Software (02/2023 – 10/2023) <br></br>
            Engineering Program <br></br>● Full-stack software engineer adept at
            utilizing JavaScript for front-end and back-end programming.{" "}
            <br></br>● Learned industry best practices and software development
            standards with a focus on JavaScript, HTML5, CSS3, React.js,
            Node.js, PostgreSQL, RESTful API, algorithms, and data structures.{" "}
            <br></br>● Developed and deployed mobile-first applications while
            learning new languages and frameworks. <br></br>● Produced
            professional projects from concept to completion<br></br>
          </p>
          <br></br>
          <h4>
            Projects: <br></br>
          </h4>
          <hr></hr>
          <p class="h6">
            Restaurant Reservation Application | reservationapp.adamtsaidev.com{" "}
            <br></br>● Worked with a full stack reservation and table management
            system. Versions tracked with Git.<br></br>● Implemented a React
            router and Express to build a RESTful API, to make HTTP requests for
            all the reservation data stored in the connected PostgreSQL
            database.<br></br>● Created CRUD functions and Knex queries to
            handle data going to and coming from databases.<br></br>●
            Technology: JavaScript, React.js, Express.js, Knex, HTML5, CSS3,
            PostgreSQL, RESTful API.<br></br>
            <hr></hr>
            Flashcard Application | flashcardapp.adamtsaidev.com<br></br>●
            Created an application that allows users to create, edit, and delete
            decks and cards within them.<br></br>● Created a REST API and
            middleware functions to allow user(s) to create, read, update and
            delete their perfect decks of study cards.<br></br>● Defined routes
            and URLs, and used state over multiple components.<br></br>●
            Technology: JavaScript, React.js, Express.js, Knex, HTML5 and CSS3.
            Versions tracked with Git.<br></br>
            <hr></hr>
            Recipe Tracker Application | recipeapp.adamtsaidev.com<br></br>●
            Built a React application to allow saving recipe information.
            <br></br>● Implemented the single responsibility principle with
            React components.<br></br>● Technology: React.js, HTML5, CSS3,
            Bootstrap<br></br>
            <hr></hr>
            Encryption/Decryption Application | decoderapp.adamtsaidev.com
            <br></br>● Built to be an encryption/decryption application to
            communicate and read top-secret messages.<br></br>● Created
            utilizing the test-driven development method.<br></br>● Technology:
            JavaScript, HTML5, Node.js, Bootstrap, Mocha, Chai.<br></br>
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            onClick={() => closeModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
