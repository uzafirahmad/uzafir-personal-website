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
import panacealogicslogo from "../../assets/panacealogicslogo.svg";
import mlsenselogo from "../../assets/mlsenselogo.svg";
import linkedin from "../../assets/linkedin.svg";
import { FaLinkedin } from "react-icons/fa";

const Experience = () => {
  return (
    <>
      <Navbar highlight="experience" />
      {/* <div className="blurrygradient_experience" /> */}
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
            <img
              id="googlecloudpic"
              className="experience_picture"
              src={googlecloud}
            />
          </div>
          <div className="experience_picture_div_cloud">
            <img
              id="digitaloceanpic"
              className="experience_picture"
              src={digitalocean}
            />
          </div>
        </div>

        <div className="black_sun_and_text_div">
          <img draggable="false" className="black_sun_image" src={blacksun} />
          <div className="black_sun_blur"></div>
          <span className="black_sun_text">Work Experience</span>
        </div>

        <div className="experience_headers">Companies I have Worked for</div>

        <div className="experience_company_worked_for_grid">
          <div
            onClick={() => {
              const companyURL = `https://www.linkedin.com/company/ml-sense/`;
              window.open(companyURL, "_blank");
            }}
            className="experience_company_image_and_linkedin_container"
          >
            <img
              draggable="false"
              id="mlsenselogo"
              className="companylogo_experience_worked_for"
              src={mlsenselogo}
            />
            <div className="experience_linkedin_and_compapany_name_worked_for_div">
              <FaLinkedin className="experience_linkedin_company_worked_for_logo" />
              <span className="experience_worked_for_company_name">
                ML Sense Solutions
              </span>
            </div>
          </div>

          <div onClick={() => {
              const companyURL = `https://www.linkedin.com/company/panacea-logics/`;
              window.open(companyURL, "_blank");
            }} className="experience_company_image_and_linkedin_container">
            <img
              draggable="false"
              id="panacealogicslogo"
              className="companylogo_experience_worked_for"
              src={panacealogicslogo}
            />
            <div className="experience_linkedin_and_compapany_name_worked_for_div">
              <FaLinkedin className="experience_linkedin_company_worked_for_logo" />
              <span className="experience_worked_for_company_name">
                Panacealogics
              </span>
            </div>
          </div>
        </div>

        <div className="experience_headers">My Responsibilities and Job Description</div>

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
