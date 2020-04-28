import React from "react";
import Lorem from './components/Lorem/'
import Footer from './components/BottomNavBar'
import johnHeadshotJPG from "./images/john-headshots-5.jpg";


//

function App() {
  return (
    <div>

      {/* // <!-- 1st PARALLAX --> */}

      <div id="img1" className="parallax-img1">
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

            <h4 className="intro-text john-sass text-center">
              <div className="first-row">
                <span id="period">. </span>
                <span id="j">J </span>
                <span id="s">S </span>
              </div>

              <div className="second-row">
                <span id="first">John</span>
                <span id="last"> Sasser</span>
              </div>
            </h4>
          </div>
        </div>
      </div>

      <section className="section section-light container">
        <br />
        <p className="lead">
          Georgia Institute of Technology Full Stack web-application and design
          development certificate holder. Leveraging a background in sales and
          account management, to connect with and provide elegant, user friendly
          and maintainable solutions. I am a MERN stack developer with an
          eagerness to learn new technologies & A love for all things code.
        </p>
      </section>

      {/* <!-- 2nd PARALLAX --> */}

      <div className="parallax-img2">
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
                src="./assets/images/portfolio-images/filefish-min.png"
                alt="Code Quiz App"
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
                src="./assets/images/portfolio-images/note-taker-min.png"
                alt="Local Storage Day-Planner"
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
                src="./assets/images/portfolio-images/weather-dashboard-min.png"
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
                src="./assets/images/portfolio-images/property-hunter-min.png"
                alt="Property scoring app"
              />
            </div>
          </a>
        </div>
      </div>

      <section className="section section-dark">
        <br />
        <br />
      </section>

      {/* <!-- 3rd PARALLAX --> */}

      <div className="parallax-img3">
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
                src="./assets/images/vectors/mongodb-green.svg"
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
                src="./assets/images/vectors/express-js.svg"
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
                src="./assets/images/vectors/react.svg"
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
                src="./assets/images/vectors/nodejs-green.svg"
                alt="Property scoring app"
              />
              <div className="imgText"></div>
            </div>
          </a>
        </div>
      </div>

      {/* <!-- EMAIL SECTION --> */}

      <section className="section section-dark"></section>
      <div className="container contactContainer">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card-body cardContainer" id="email-container">
              <h2 className="card-title">SHOOT ME AN EMAIL</h2>

              <hr size="3" color="#000" width="100%" />

              <form action="https://formspree.io/xbjojbro" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="replyto">Your Email</label>
                  <input
                    type="email"
                    name="replyto"
                    className="form-control"
                    placeholder="Your email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="12"
                    placeholder="Message"
                  ></textarea>
                  <br />

                  <input
                    className="btn btn-dark btn-lg btn-block submitButton"
                    type="submit"
                    value="Send"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- STICKY FOOTER --> */}

		<Footer />

      
    </div>
  );
}

export default App;

// const ParallaxImage = () => (
// 	<Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
// 		<img
// 			src="https://wallpapermemory.com/101451#"
// 			className="App-logo"
// 			alt="logo"
// 		/>
// 	</Parallax>
// );
