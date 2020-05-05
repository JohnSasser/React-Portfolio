import React from 'react';
import johnHeadshotJPG from "../../images/john-headshots-5.jpg";

function IntroContainer () {
    return (
        <div className="container img1-container">
        <img
          id="head-shot"
          className="img-fluid"
          src={johnHeadshotJPG}
          alt="head-shot"
        />
        <br />
        <br />
        <div className="text-div">
          <h1 className="intro-text web-dev text-center">
            Front-End Web Developer
          </h1>
          <h2>John Sasser</h2>
        </div>
      </div>
    )
}
export default IntroContainer;