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
import awslogo from "../../assets/awslogo.svg";
import linterlabslogo from "../../assets/linterlabslogo.svg";
import ordionlogo from "../../assets/ordionlogo.svg";
import mlsenselogo from "../../assets/mlsenselogo.svg";
import linkedin from "../../assets/linkedin.svg";
import { FaGlobe } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Experience = () => {
  return (
    <>
      <Navbar highlight="experience" />
      {/* <div className="blurrygradient_experience" /> */}
      <div id="experience_master_div">
        <div className="black_sun_and_text_div">
          <img
            alt="black_sun_image"
            draggable="false"
            className="black_sun_image"
            src={blacksun}
          />
          <div className="black_sun_blur"></div>
          <span className="black_sun_text">Tech Stack</span>
        </div>

        <div style={{ marginTop: "10px" }} className="experience_headers">
          Languages
        </div>

        <div className="experience_container">
          <div className="experience_picture_div">
            <img
              alt="experience_picture"
              className="experience_picture"
              src={python}
            />
            <span className="experience_card_text">Python</span>
          </div>
          <div className="experience_picture_div">
            <img
              alt="experience_picture"
              className="experience_picture"
              src={typescript}
            />
            <span className="experience_card_text">Typescript</span>
          </div>
          <div className="experience_picture_div">
            <img
              alt="experience_picture"
              className="experience_picture"
              src={javascript}
            />
            <span className="experience_card_text">Javascript</span>
          </div>
        </div>

        <div className="experience_headers">Frontend</div>

        <div className="experience_container">
          <div className="experience_picture_div">
            <img
              alt="experience_picture"
              className="experience_picture"
              src={reactjs}
            />
            <span className="experience_card_text">ReactJS</span>
          </div>
          <div className="experience_picture_div">
            <img
              alt="experience_picture"
              className="experience_picture"
              src={nextjs}
            />
            <span className="experience_card_text">NextJS</span>
          </div>
        </div>

        <div className="experience_headers">Backend</div>

        <div className="experience_container_backend">
          <div className="experience_picture_div">
            <img
              alt="experience_picture"
              id="djangoimage"
              className="experience_picture"
              src={django}
            />
            <span className="experience_card_text">Django</span>
          </div>
          <div className="experience_picture_div">
            <img
              alt="experience_picture"
              className="experience_picture"
              src={nodejs}
            />
            <span className="experience_card_text">ExpressJS</span>
          </div>
          <div className="experience_picture_div">
            <img
              alt="experience_picture"
              className="experience_picture"
              src={nestjs}
            />
            <span className="experience_card_text">NestJS</span>
          </div>
          <div className="experience_picture_div">
            <img
              alt="experience_picture"
              className="experience_picture"
              src={docker}
            />
            <span className="experience_card_text">Docker</span>
          </div>
        </div>

        <div className="experience_headers">Databases</div>

        <div className="experience_container">
          <div className="experience_picture_div">
            <img
              alt="experience_picture"
              className="experience_picture"
              src={postgresql}
            />
            <span className="experience_card_text">PostgreSQL</span>
          </div>
          <div className="experience_picture_div">
            <img
              alt="experience_picture"
              className="experience_picture"
              src={mongodb}
            />
            <span className="experience_card_text">MongoDB</span>
          </div>
        </div>

        <div className="experience_headers">Cloud Providers</div>

        <div className="experience_containe_cloud">
          <div className="experience_picture_div_cloud">
            <img
              alt="googlecloudpic"
              id="googlecloudpic"
              className="experience_picture"
              src={googlecloud}
            />
          </div>
          <div className="experience_picture_div_cloud">
            <img
              alt="googlecloudpic"
              id="googlecloudpic"
              className="experience_picture"
              src={awslogo}
            />
          </div>
          <div className="experience_picture_div_cloud">
            <img
              alt="digitaloceanpic"
              id="digitaloceanpic"
              className="experience_picture"
              src={digitalocean}
            />
          </div>
        </div>

        <div className="black_sun_and_text_div">
          <img
            alt="black_sun_image"
            draggable="false"
            className="black_sun_image"
            src={blacksun}
          />
          <div className="black_sun_blur"></div>
          <span className="black_sun_text">Work Experience</span>
        </div>

        <div style={{ marginTop: "10px" }} className="experience_headers">
          Companies I have Worked for
        </div>

        <div className="experience_company_worked_for_grid">
          <div
            onClick={() => {
              const companyURL = `https://www.mlsense.ai/`;
              window.open(companyURL, "_blank");
            }}
            className="experience_company_image_and_linkedin_container"
          >
            <img
              alt="mlsenselogo"
              draggable="false"
              id="mlsenselogo"
              className="companylogo_experience_worked_for"
              src={mlsenselogo}
            />
            <div className="experience_linkedin_and_compapany_name_worked_for_div">
              <FaGlobe className="experience_linkedin_company_worked_for_logo" />
              <span className="experience_worked_for_company_name">
                ML Sense Solutions
              </span>
            </div>
          </div>

          <div
            onClick={() => {
              const companyURL = `https://linterlabs.com/`;
              window.open(companyURL, "_blank");
            }}
            className="experience_company_image_and_linkedin_container"
          >
            <img
              alt="linterlabslogo"
              draggable="false"
              id="linterlabslogo"
              className="companylogo_experience_worked_for"
              src={linterlabslogo}
            />
            <div className="experience_linkedin_and_compapany_name_worked_for_div">
              <FaGlobe className="experience_linkedin_company_worked_for_logo" />
              <span className="experience_worked_for_company_name">
                Linter Labs
              </span>
            </div>
          </div>

          <div
            onClick={() => {
              const companyURL = `https://ordion.io/`;
              window.open(companyURL, "_blank");
            }}
            className="experience_company_image_and_linkedin_container"
          >
            <img
              alt="transformlondonlogo"
              draggable="false"
              id="transformlondonlogo"
              className="companylogo_experience_worked_for"
              src={ordionlogo}
            />
            <div className="experience_linkedin_and_compapany_name_worked_for_div">
              <FaGlobe className="experience_linkedin_company_worked_for_logo" />
              <span className="experience_worked_for_company_name">
                Ordion.io
              </span>
            </div>
          </div>
        </div>

        <div className="experience_headers">My Role and Responsibilities</div>

        <div className="experience_role_and_responsibilities_master">
          <div className="experience_role_and_responsibilities_header">
            <span className="experience_role_and_responsibilities_header_job_title">
              Ordion.io
            </span>
            <img
              alt="transformlondon_image_experience_role_and_responsibilities"
              src={ordionlogo}
              id="transformlondon_image_experience_role_and_responsibilities"
              className="experience_role_and_responsibilitie_image"
            />
          </div>
          <div className="experience_role_and_responsibilities_body">
            <div className="experience_role_and_responsibilities_body_timeline">
              <span className="experience_role_and_responsibilities_timeline_ending_span">
                Present
              </span>
              <hr className="experience_role_and_responsibilities_timeline_hr"></hr>
              <span className="experience_role_and_responsibilities_timeline_starting_span">
                Dec 2024
              </span>
            </div>
            <div className="experience_role_and_responsibilities_body_lists">
              <span className="experience_role_and_responsibilities_body_lists_title">
                Frontend Development
              </span>
              <ul className="experience_role_and_responsibilities_body_lists_ul">
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Implemented Prefetching, ISR, SSG and cache strategies with NextJS
                </li>
              </ul>

              <span className="experience_role_and_responsibilities_body_lists_title">
                Backend Development
              </span>
              <ul className="experience_role_and_responsibilities_body_lists_ul">
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Implemented Redis alongside Node APIs to make read operations 50 times faster
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Converted monolithic architecture to microservices
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Incorporated payment gateways and digital wallets
                </li>
              </ul>

              <span className="experience_role_and_responsibilities_body_lists_title">
                DevOps & Cloud
              </span>
              <ul className="experience_role_and_responsibilities_body_lists_ul">
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Leveraged GitHub Actions to push containerized applications to GCP
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Implemented load balancers to distribute traffic and enhance scalability.
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Implemented Cloud CDN to enhance accessibility.
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Automated SSL certificate creation for customer domains
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Implemented VPC network to isolate cloud resources
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experience_role_and_responsibilities_master">
          <div className="experience_role_and_responsibilities_header">
            <span className="experience_role_and_responsibilities_header_job_title">
              Linter Labs
            </span>
            <img
              alt="panacealogics_image_experience_role_and_responsibilities"
              src={linterlabslogo}
              id="panacealogics_image_experience_role_and_responsibilities"
              className="experience_role_and_responsibilitie_image"
            />
          </div>
          <div className="experience_role_and_responsibilities_body">
            <div className="experience_role_and_responsibilities_body_timeline">
              <span className="experience_role_and_responsibilities_timeline_ending_span">
                Dec 2024
              </span>
              <hr className="experience_role_and_responsibilities_timeline_hr"></hr>
              <span className="experience_role_and_responsibilities_timeline_starting_span">
                Oct 2023
              </span>
            </div>
            <div className="experience_role_and_responsibilities_body_lists">
              <span className="experience_role_and_responsibilities_body_lists_title">
                Frontend Development
              </span>
              <ul className="experience_role_and_responsibilities_body_lists_ul">
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Employed HTML/CSS to create responsive UIs in NextJS and ReactJS.
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Implemented WebRTC on frontend for peer-to-peer group video/audio calls
                </li>
              </ul>

              <span className="experience_role_and_responsibilities_body_lists_title">
                Backend Development
              </span>
              <ul className="experience_role_and_responsibilities_body_lists_ul">
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Implemented Redis with Socket.io for messaging application
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Lead the development of APIs using Django, NestJS and ExpressJS
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Used a media streaming server with WebRTC to implement a video/audio
                </li>
              </ul>

              <span className="experience_role_and_responsibilities_body_lists_title">
                DevOps & Cloud
              </span>
              <ul className="experience_role_and_responsibilities_body_lists_ul">
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Used Azure Pipelines to deploy containerized apps to GCP Cloud Run and App Engine
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Deployed apps to AWS EC2, Beanstalk and Fargate
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          style={{ marginBottom: "0px" }}
          className="experience_role_and_responsibilities_master"
        >
          <div className="experience_role_and_responsibilities_header">
            <span className="experience_role_and_responsibilities_header_job_title">
              ML Sense Solutions
            </span>
            <img
              alt="mlsense_image_experience_role_and_responsibilities"
              src={mlsenselogo}
              id="mlsense_image_experience_role_and_responsibilities"
              className="experience_role_and_responsibilitie_image"
            />
          </div>
          <div className="experience_role_and_responsibilities_body">
            <div className="experience_role_and_responsibilities_body_timeline">
              <span className="experience_role_and_responsibilities_timeline_ending_span">
                Oct 2023
              </span>
              <hr className="experience_role_and_responsibilities_timeline_hr"></hr>
              <span className="experience_role_and_responsibilities_timeline_starting_span">
                Mar 2022
              </span>
            </div>
            <div className="experience_role_and_responsibilities_body_lists">
              <span className="experience_role_and_responsibilities_body_lists_title">
                Frontend Development
              </span>
              <ul className="experience_role_and_responsibilities_body_lists_ul">
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Led UI design for various projects with ReactJS and NextJS.
                </li>
              </ul>

              <span className="experience_role_and_responsibilities_body_lists_title">
                Backend Development
              </span>
              <ul className="experience_role_and_responsibilities_body_lists_ul">
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Developed backend services using Django and ExpressJS
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Implemented auth with JWT and OAuth
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Incorporated web sockets with Daphne
                </li>
              </ul>

              <span className="experience_role_and_responsibilities_body_lists_title">
                DevOps & Cloud
              </span>
              <ul className="experience_role_and_responsibilities_body_lists_ul">
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Deployed containerized apps to GCP's App Engine and Cloud Run with GitHub Actions
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Incorporated Firestore, CloudSQL and BigQuery for data storage
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Did cost reduction analysis on AWS services
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="black_sun_and_text_div">
          <img
            alt="black_sun_image"
            draggable="false"
            className="black_sun_image"
            src={blacksun}
          />
          <div className="black_sun_blur"></div>
          <span className="black_sun_text">Projects</span>
        </div> */}

        {/* <div className="projects_grid_experience">
          <iframe
            className="projects_grid_experience_item"
            src="https://www.behance.net/embed/project/185978021?ilo0=1"
            height="316"
            width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            className="projects_grid_experience_item"
            src="https://www.behance.net/embed/project/173360077?ilo0=1"
            height="316"
            width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            className="projects_grid_experience_item"
            src="https://www.behance.net/embed/project/172970563?ilo0=1"
            height="316"
            width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            className="projects_grid_experience_item"
            src="https://www.behance.net/embed/project/172969535?ilo0=1"
            height="316"
            width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            className="projects_grid_experience_item"
            src="https://www.behance.net/embed/project/173360219?ilo0=1"
            height="316"
            width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            className="projects_grid_experience_item"
            src="https://www.behance.net/embed/project/179660751?ilo0=1"
            height="316"
            width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            className="projects_grid_experience_item"
            src="https://www.behance.net/embed/project/179663507?ilo0=1"
            height="316"
            width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            className="projects_grid_experience_item"
            src="https://www.behance.net/embed/project/179663887?ilo0=1"
            height="316"
            width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div> */}
      </div>
    </>
  );
};

export default Experience;
