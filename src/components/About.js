import React, { useEffect, useState } from "react";
import profilePicture from "./profile.jpg";

function renderAbout() {
  return (
    <div id="about-me" className="bg-light rounded-3">
      <div className="container py-5">
        <div className="row bg-light">
          <h1 className="display-4 fw-bold">
            Hey! I'm Allen, and I'm a software developer.
          </h1>
        </div>
        <div className="row">
          <p className="col-lg-9 fs-4">
            My name is Allen Murfee and I'm a software developer for Brightpoint
            Community College! I love everything about coding and building
            websites and apps. My skills include: JavaScript, React, Node.js,
            PHP, CSS/SCSS, RESTful APIs, GraphQL, MySQL, MongoDB, and more.
            <br /> <br />
            Below, you'll find links to applications I've built, some
            full-stack, some frontend, and some backend. In my free time, I play
            video games, go hiking and camping, tinker with my car, and spend
            time with my fiancée, dog, and cats.
            <br />
            <br />
            I'd love to hear from you! Here's my contact info: <br />-{" "}
            <a href="mailto:allenmurfee123@gmail.com">
              Email Me
            </a> &#128234; <br />-{" "}
            <a href="https://github.com/allenmurfee">GitHub</a> &#128187; <br />
            - <a href="https://www.linkedin.com/in/allen-murfee">LinkedIn</a>{" "}
            &#127760;
          </p>

          <div className="col-lg-3">
            <div className="row">
              <img
                className="img-fluid rounded"
                src={profilePicture}
                alt="Allen Murfee profile picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default renderAbout;
