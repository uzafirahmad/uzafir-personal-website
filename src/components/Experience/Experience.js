import React from "react";
import "./Experience.css";
import Navbar from "../Navbar/Navbar";
import blacksun from "../../assets/blacksun.svg";
import googlecloud from "../../assets/google_cloud.svg";
import digitalocean from "../../assets/digitalocean.svg";

import postgresql from "../../assets/postgresql.svg";
import mongodb from "../../assets/mongodb.svg";

import django from "../../assets/django.svg";
import nestjs from "../../assets/nestjs.svg";
import nodejs from "../../assets/nodejs.svg";
import docker from "../../assets/docker.svg";

import typescript from "../../assets/typescript.svg";
import python from "../../assets/python.svg";
import javascript from "../../assets/javascript.svg";

import nextjs from "../../assets/nextjs.svg";
import reactjs from "../../assets/reactjs.svg";

const Experience = () => {
  return (
    <>
      <Navbar highlight="experience" />
      <div className="blurrygradient_experience" />
      <div id="experience_master_div">
        <div className="black_sun_and_text_div">
          <img draggable="false" className="black_sun_image" src={blacksun} />
          <div className="black_sun_blur"></div>
          <span className="black_sun_text">Tech Stack</span>
        </div>

        <div className="experience_headers">Languages</div>

        <div className="experience_container">
          <div className="experience_picture_div">
            <img className="experience_picture" src={python} />
            <span className="experience_card_text">Python</span>
          </div>
          <div className="experience_picture_div">
            <img className="experience_picture" src={typescript} />
            <span className="experience_card_text">Typescript</span>
          </div>
          <div className="experience_picture_div">
            <img className="experience_picture" src={javascript} />
            <span className="experience_card_text">Javascript</span>
          </div>
        </div>

        <div className="experience_headers">Frontend</div>

        
        <div className="experience_container">
          <div className="experience_picture_div">
            <img className="experience_picture" src={reactjs} />
            <span className="experience_card_text">ReactJS</span>
          </div>
          <div className="experience_picture_div">
            <img className="experience_picture" src={nextjs} />
            <span className="experience_card_text">NextJS</span>
          </div>
        </div>

        <div className="experience_headers">Backend</div>

        <div className="experience_container_backend">
          <div className="experience_picture_div">
            <img id="djangoimage" className="experience_picture" src={django} />
            <span className="experience_card_text">Django</span>
          </div>
          <div className="experience_picture_div">
            <img className="experience_picture" src={nodejs} />
            <span className="experience_card_text">ExpressJS</span>
          </div>
          <div className="experience_picture_div">
            <img className="experience_picture" src={nestjs} />
            <span className="experience_card_text">NestJS</span>
          </div>
          <div className="experience_picture_div">
            <img className="experience_picture" src={docker} />
            <span className="experience_card_text">Docker</span>
          </div>
        </div>

        <div className="experience_headers">Databases</div>

        <div className="experience_container">
          <div className="experience_picture_div">
            <img className="experience_picture" src={postgresql} />
            <span className="experience_card_text">PostgreSQL</span>
          </div>
          <div className="experience_picture_div">
            <img className="experience_picture" src={mongodb} />
            <span className="experience_card_text">MongoDB</span>
          </div>
        </div>


        <div className="experience_headers">Cloud Providers</div>

        <div className="experience_container">
          <div className="experience_picture_div_cloud">
            <img id="googlecloudpic" className="experience_picture" src={googlecloud} />
          </div>
          <div className="experience_picture_div_cloud">
            <img id="digitaloceanpic" className="experience_picture" src={digitalocean} />
          </div>
        </div>

        <div className="black_sun_and_text_div">
          <img draggable="false" className="black_sun_image" src={blacksun} />
          <div className="black_sun_blur"></div>
          <span className="black_sun_text">Work Experience</span>
        </div>

        <div className="experience_headers">Companies I have Worked for</div>

        <div className="black_sun_and_text_div">
          <img draggable="false" className="black_sun_image" src={blacksun} />
          <div className="black_sun_blur"></div>
          <span className="black_sun_text">Projects</span>
        </div>
      </div>
    </>
  );
};

export default Experience;
