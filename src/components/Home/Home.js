import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import blurrygradient from '../../assets/blurrygradient.svg'

const Home = () => {

  return (
    <div>
      <Navbar highlight="home"/>
      <span id="nametext">Uzafir Ahmad.</span>
      <span id="occupationtext">Full Stack Software Engineer</span>
      <div className="blurrygradient_2"/>
      <div className="blurrygradient_1"/>
    </div>
  );
};

export default Home;
