import React, { useState } from "react";

function renderProjects() {
  return (
    <div className="bg-light">
      <div id="my-work" className="container py-5">
        <div className="row">
          <h1 className="display-4 fw-bold">My Work</h1>
          <div className="row">
            <p className=" fs-4">
              Below, you'll find several applications I've built individually or
              in teams. <br /> <br />
              <strong>Listify</strong> is a MERN stack app built with React,
              MongoDB, GraphQL, and Node.js that allows you to create to-do
              lists and manage your tasks; <strong>Pet 2 Vet</strong> is a
              full-stack app using JavaScript, Node.js, MySQL, and other
              technologies to allow patients to enter their pets' medical
              records for their vets; <strong>Smoothie Math</strong> is a
              front-end app utilizing third-party API data to produce
              nutritional information of your smoothie ingredient combination;
              and the <strong>Ecommerce Backend</strong> is a backend app that
              utlizes MySQL, NoSQL, Sequelize, and Mongoose to built a database
              for a mock ecommerce site.
            </p>
          </div>
          <div className="row py-3">
            <div className="col-6 text-center">
              <img
                className="img-fluid rounded"
                src="./todo.jpg"
                alt="golden retriever"
              />

              <button
                type="button"
                className="btn btn-secondary mt-2"
                data-bs-toggle="modal"
                data-bs-target="#listifyModal"
              >
                Listify
              </button>

              {/*<!-- Modal -->*/}
              <div
                className="modal fade"
                id="listifyModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header d-flex">
                      <h1 className="modal-title fs-3" id="exampleModalLabel">
                        Listify
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body left-align">
                      Listify is a to-do list app to easily create and manage
                      tasks within your own to-do lists. It's built with the
                      MERN stack: MongoDB, Express.js, React, and Node.js. It
                      also uses GraphQL to manipulate data.
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-secondary justify-content-center w-33 m-3"
                        data-bs-dismiss="modal"
                      >
                        <a href="https://young-island-68053.herokuapp.com">
                          View App
                        </a>
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary justify-content-center w-33 m-3"
                        data-bs-dismiss="modal"
                      >
                        <a href="https://github.com/allenmurfee/todo-list-app">
                          View GitHub Repository
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 text-center">
              <img
                className="img-fluid rounded"
                src="./golden.jpg"
                alt="golden retriever"
              />

              <button
                type="button"
                className="btn btn-secondary mt-2"
                data-bs-toggle="modal"
                data-bs-target="#petModal"
              >
                Pet 2 Vet
              </button>

              {/*<!-- Modal -->*/}
              <div
                className="modal fade"
                id="petModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header d-flex">
                      <h1 className="modal-title fs-3" id="exampleModalLabel">
                        Pet 2 Vet
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body left-align">
                      Pet 2 Vet is a full-stack application for pet owners to
                      submit their pets' medical information to veterinarians.
                      It has a dynamic frontend utilizing JavaScript, Node.js,
                      Handlebars, and a MySQL database using Sequelize models.
                      It also uses Express.js to efficiently use routes and
                      utlize session information for login and user data.
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-secondary justify-content-center w-33 m-3"
                        data-bs-dismiss="modal"
                      >
                        <a href="https://damp-forest-39395.herokuapp.com/">
                          View App
                        </a>
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary justify-content-center w-33 m-3"
                        data-bs-dismiss="modal"
                      >
                        <a href="https://github.com/allenmurfee/pet-to-vet">
                          View GitHub Repository
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 text-center">
              <img
                className="img-fluid rounded"
                src="./smoothie2.jpg"
                alt="smoothie in a glass"
              />
              {/*<!-- Button trigger modal -->*/}
              <button
                type="button"
                className="btn btn-secondary mt-2"
                data-bs-toggle="modal"
                data-bs-target="#smoothieModal"
              >
                Smoothie Math
              </button>

              {/*<!-- Modal -->*/}
              <div
                className="modal fade"
                id="smoothieModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-3" id="exampleModalLabel">
                        Smoothie Math
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body left-align">
                      Smoothie Math is a frontend application utilizing a
                      third-party API and fetch requests to populate nutritional
                      data so the user can see the nutrition facts of the
                      smoothie they’re making.
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-secondary justify-content-center w-33 m-3"
                        data-bs-dismiss="modal"
                      >
                        <a href="https://allenmurfee.github.io/smoothie-math/">
                          View App
                        </a>
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary justify-content-center w-33 m-3"
                        data-bs-dismiss="modal"
                      >
                        <a href="https://github.com/allenmurfee/smoothie-math">
                          View GitHub Repository
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 text-center">
              <img
                className="img-fluid rounded"
                src="./ecommerce.jpg"
                alt="Allen Murfee profile picture"
              />
              {/*<!-- Button trigger modal -->*/}
              <button
                type="button"
                className="btn btn-secondary mt-2"
                data-bs-toggle="modal"
                data-bs-target="#ecommerceModal"
              >
                Ecommerce Backend
              </button>

              {/*<!-- Modal -->*/}
              <div
                className="modal fade"
                id="ecommerceModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-3" id="exampleModalLabel">
                        Ecommerce Application - Backend
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body left-align">
                      This Ecommerce Backend Application is a fully backend app
                      using MySQL (Sequelize) to create a database for a
                      hypothetical Ecommerce site that includes data on
                      products, categories, price, the number in stock, etc.
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-secondary justify-content-center w-33 m-3"
                        data-bs-dismiss="modal"
                      >
                        <a href="https://github.com/allenmurfee/ecommerce-backend">
                          View App
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default renderProjects;
