import React, { useState, useEffect } from "react";
import About from "./About";
import Project from "./Project";
import { Link } from 'react-router-dom'

function useHeader() {
  // const [showProjects, setShowProjects] = useState(() => {
  //   const initialState = false;
  //   return initialState
  // });

  // useEffect(() => {
  //   const data = window.localStorage.getItem('state');
  //   if ( data !== null ) setShowProjects(JSON.parse(data));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("state", JSON.stringify(showProjects))
  // }, [showProjects])

  // console.log(showProjects)

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/react-portfolio">
          Allen Murfee's Portfolio
        </a> */}
        <Link to='/react-portfolio' className="navbar-brand " aria-current="page">Allen Murfee's Portfolio</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link " aria-current="page" href="/react-portfolio">
                About Me
              </a> */}
              <Link to='/react-portfolio' className="nav-link " aria-current="page">About Me</Link>
            </li>
            <li className="nav-item ">
              {/* <a className="nav-link" href="/react-portfolio/my-work">
                My Work
              </a> */}
               <Link to='/react-portfolio/my-work' className="nav-link " aria-current="page">My Work</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto:allenmurfee123@gmail.com">
                Email Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/allenmurfee">
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/allen-murfee"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default useHeader;
