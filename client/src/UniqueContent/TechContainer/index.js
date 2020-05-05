import React from "react";
import MongoDbGrn from "../../images/vectors/mongodb-green.svg";
import ExpressBlk from "../../images/vectors/express-js.svg";
import ReactBlk from "../../images/vectors/react.svg";
import NodeGrn from "../../images/vectors/nodejs-green.svg";

function TechContainer() {
  return (
    <>
      <div className="container row-container">
        <h2 className="tech-intro">MERN STACK DEVELOPER</h2>
      </div>

      <div className="tech-container">
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image-circle img-fluid">
            <img
              className="portfolio-img"
              src={MongoDbGrn}
              alt="Property scoring app"
            />
            <div className="imgText"></div>
          </div>
        </a>

        <a
          href="https://expressjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image-circle img-fluid">
            <img
              className="portfolio-img"
              src={ExpressBlk}
              alt="Property scoring app"
            />
            <div className="imgText"></div>
          </div>
        </a>

        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image-circle img-fluid">
            <img
              className="portfolio-img"
              src={ReactBlk}
              alt="Property scoring app"
            />
            <div className="imgText"></div>
          </div>
        </a>

        <a
          href="https://nodejs.org/en/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image-circle img-fluid">
            <img
              className="portfolio-img"
              src={NodeGrn}
              alt="Property scoring app"
            />
            <div className="imgText"></div>
          </div>
        </a>
      </div>
    </>
  );
}

export default TechContainer;