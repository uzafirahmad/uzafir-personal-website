import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import blurrygradient from '../../assets/blurrygradient.svg'

const Home = () => {

  return (
    <div>
      <Navbar highlight="home"/>
      <span className="pagetitle_home">Uzafir Ahmad.</span>
      <span className="secondarytitle_home">Full Stack Software Engineer</span>
      <div className="blurrygradient_2"/>
      <div className="blurrygradient_1"/>
    </div>
  );
};

export default Home;
