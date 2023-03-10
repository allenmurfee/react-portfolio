import React, { useEffect, useState } from "react";
import profilePicture from "./profile.jpg";

function renderAbout() {
  return (
    <div id="about-me" className="bg-light rounded-3">
      <div className="container py-5">
        <div className="row bg-light">
          <h1 className="display-4 fw-bold">
            Hey! I'm Allen, and I'm a full-stack developer.
          </h1>
        </div>
        <div className="row">
          <p className="col-lg-9 fs-4">
            My name is Allen Murfee and I'm a 23-year-old full-stack software
            developer. My skills include: JavaScript, React.js, Node.js, MERN
            stack, Express.js, RESTful APIs, GraphQL, MySQL, MongoDB, and more.
            I am a University of Richmond full-stack engineering bootcamp
            graduate who is looking for a career change into software
            developing. I currently work in marketing and also hold a Bachelor's
            degree from Virginia Tech (Go Hokies!).
            <br /> <br />
            Below, you'll find links to applications I've built, some
            full-stack, some frontend, some backend. In my free time, I play
            video games, tinker with my car, exercise, and spend time with my
            cats.
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
