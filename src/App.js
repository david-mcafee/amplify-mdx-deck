// import logo from "./logo.svg";
import "./App.css";
import banjo from "./assets/banjo.jpeg";

import React from "react";
// import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";

const App = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section section1">
            <h1>About me 🤠</h1>
            <ul>
              <li>I'm 35</li>
              <li>I live in LA</li>
              <li>I'm originally from Pennsylvania</li>
              <li>I'm hosting this slideshow with Amplify 😉</li>
              <li>According to GH Copilot, I'm a big fan of the 90's</li>
            </ul>
          </div>
          <div className="section section2a">
            <h1>Banjo 🐶</h1>
            <ul>
              <li>Is rescue from Oakland, CA</li>
              <li>Is maybe 4 years old?</li>
              <li>Loves to lay in the sun</li>
              <li>Recently got a roommate named Toby</li>
            </ul>
          </div>
          <div className="section section2b">
            <img className="image" src={banjo} alt="Banjo" />
          </div>
          <div className="section section3">
            <h1>I play music! 🥁 🎸</h1>
          </div>
          <div className="section section4">
            <h1>I once hated coding 😱</h1>
          </div>
          <div className="section section5">
            <h1>I love the outdoors 🌲</h1>
          </div>
          <div className="section section6">
            <h1>My wife is a veterinarian / acupuncturist for dogs 👩🏻‍⚕️</h1>
          </div>
          <div className="section section7">
            <h1>Let's hang out! ☕️</h1>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
