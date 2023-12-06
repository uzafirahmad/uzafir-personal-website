import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Experience from "../Experience/Experience";
import starsbackground from "../../assets/starsbackground.svg";

const Home = () => {
  return (
    <div>
      <div id="starsbackground_div">
        <img draggable="false" src={starsbackground} id="starsbackground_image" />
      </div>
      <Navbar />
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;
