import React from "react";
import fileFish from "../../images/portfolio-images/filefish-min.png";
import noteTaker from "../../images/portfolio-images/note-taker-min.png";
import weatherApp from "../../images/portfolio-images/weather-dashboard-min.png";
import chipperImg from "../../images/portfolio-images/chipper-min.png"
import trainingTracker from "../../images/portfolio-images/training-training-min.png";
import "./style.css"

function ProjectContainer() {
  return (
    <>
      <h2 className="para2-text">Projects</h2>
      <div className="projectFlex">

        <div>
          <a
            href="https://chipper2.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-box">
              <img className="portfolio-img" src={chipperImg} alt="File Fish" />
            </div>
          </a>

          <br />

          <a
            href="https://github.com/JohnSasser/chipper"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="btn btn-primary btn-lg portfolio-btn"
            >
              File Fish Repository
            </button>
          </a>
        </div>

        <div>
          <a
            href="https://file-fish.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-box">
              <img className="portfolio-img" src={fileFish} alt="File Fish" />
            </div>
          </a>

          <br />

          <a
            href="https://github.com/JohnSasser/fileFish"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="btn btn-primary btn-lg portfolio-btn"
            >
              File Fish Repository
            </button>
          </a>
        </div>

        <div>
          <a
            href="https://obscure-garden-90006.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-box">
              <img
                className="portfolio-img"
                src={noteTaker}
                alt="Day-Planner"
              />
            </div>
          </a>

          <br />

          <a
            href="https://github.com/JohnSasser/11-Note-Taker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="btn btn-primary btn-lg portfolio-btn"
            >
              Note Taker Repository
            </button>
          </a>
        </div>
        <div>
          <a
            href="https://johnsasser.github.io/06-WeatherDashboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-box">
              <img
                className="portfolio-img"
                src={weatherApp}
                alt="Weather Dashboard"
              />
            </div>
          </a>

          <br />

          <a
            href="https://github.com/JohnSasser/06-WeatherDashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="btn btn-primary btn-lg portfolio-btn"
            >
              Weather App Repository
            </button>
          </a>
        </div>

        <div>
          <a
            href="https://workout-tracker-222000.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-box">
              <img
                className="portfolio-img"
                src={trainingTracker}
                alt="Property Scoring App"
              />
            </div>
          </a>

          <br />

          <a
            href="https://github.com/JohnSasser/17-Training-Tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="btn btn-primary btn-lg portfolio-btn"
            >
              Training Tracker Repository
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectContainer;
