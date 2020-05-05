import React from "react";
import Footer from "./components/BottomNavBar";

import Parallax from "./components/ParallaxContainer";
import IntroContainer from "./UniqueContent/IntroContainer";
import ProjectContainer from "./UniqueContent/ProjectContainer"
import TechContainer from "./UniqueContent/TechContainer"


import EmailContainer from "./components/EmailContainer";
import Section from "./components/Section";
import AboutMe from "./components/AboutMe";



function App() {
  return (
    <>
      {/* <ParallaxContainer1 /> */}
      <Parallax className="parallax-img1">
        <IntroContainer />
      </Parallax>

      <Section>
        <AboutMe />
      </Section>

      <Section />

      <Parallax className="parallax-img2">
        <ProjectContainer />
      </Parallax>

      <Section />
      <br /> <br />

      <Parallax className="parallax-img3">
        <TechContainer />
      </Parallax>

      <EmailContainer />

      <Footer />
    </>
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
