import React from "react";
import "./App.css";
import banjo from "./assets/banjo.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const App = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="section section1">
            <h1>About me ð¤ </h1>
            <ul>
              <li>I live in LA ð´</li>
              <li>
                I've also lived in Seattle, Phoenix, Sacramento, and San
                Francisco
              </li>
              <li>I was an English major in college</li>
              <li>I'm originally from Pittsburgh, Pennsylvania</li>
              <li>I can unicycle </li>
              <li>I'm hosting this slideshow with Amplify ð</li>
              <li>According to GH Copilot, I'm a big fan of the 90's</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="section section2a">
            <h1>Banjo ð¶</h1>
            <ul>
              <li>Is a rescue from Oakland, CA</li>
              <li>Is maybe 4 years old?</li>
              <li>Loves to lay in the sun âï¸</li>
              <li>Recently got a roommate named Toby, and is "adjusting"</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="section section2b">
            <img src={banjo} alt="Banjo" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="section section3">
            <h1>Amazon</h1>
            <ul>
              <li>Iâve worked at Amazon for almost 5 years</li>
              <li>I was one of the first 5 engineers hired for Honeycode</li>
              <li>I'm currently working on DataStore ð</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="section section4">
            <h1>I play music! ð¥ ð¸</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="section section5">
            <h1>I once hated coding ð±</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="section section6">
            <h1>I love the outdoors ð²</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="section section7">
            <h1>My wife is a veterinarian / acupuncturist for dogs ð©ð»ââï¸</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="section section8">
            <h1>I recently got really into country ð¤  ð ðµ</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="section section9">
            <h1>Let's hang out! âï¸</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default App;
