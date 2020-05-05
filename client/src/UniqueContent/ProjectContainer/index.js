import React from 'react';
import fileFish from "../../images/portfolio-images/filefish-min.png"
import noteTaker from "../../images/portfolio-images/note-taker-min.png"
import weatherApp from "../../images/portfolio-images/weather-dashboard-min.png"
import propertyHunter from "../../images/portfolio-images/property-hunter-min.png"

function ProjectContainer () {
    return (
        <>
        <h2 className="para2-text">Projects</h2>
      <div className="projectFlex">
        <a
          href="https://file-fish.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image-box">
            <img
              className="portfolio-img"
              src={fileFish}
              alt="File Fish"
            />
          </div>
        </a>

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

        <a
          href="https://everetthumphreys.github.io/Property-Hunter/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image-box">
            <img
              className="portfolio-img"
              src={propertyHunter}
              alt="Property Scoring App"
            />
          </div>
        </a>
      </div>
      </>
    )
}

export default ProjectContainer;