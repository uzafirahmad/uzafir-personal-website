import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Education.css";
import { FaYoutube, FaGithub, FaStar } from "react-icons/fa";
// import ist_logo from '../../assets/ist_logo.png'

const Education = () => {
  return (
    <div>
      <Navbar highlight="education" />
      {/* <div className="blurrygradient_education" /> */}
      <div className="education_child_div">
        <div className="experience_role_and_responsibilities_master">
          <div className="experience_role_and_responsibilities_header">
            <span className="experience_role_and_responsibilities_header_job_title">
              Heriot Watt University
            </span>
            {/* <img
              alt="transformlondon_image_experience_role_and_responsibilities"
              src={ist_logo}
              id="transformlondon_image_experience_role_and_responsibilities"
              className="experience_role_and_responsibilitie_image"
            /> */}
          </div>
          <div className="experience_role_and_responsibilities_body">
            <div className="experience_role_and_responsibilities_body_timeline">
              <span className="experience_role_and_responsibilities_timeline_ending_span">
                2026
              </span>
              <hr className="experience_role_and_responsibilities_timeline_hr"></hr>
              <span className="experience_role_and_responsibilities_timeline_starting_span">
                2025
              </span>
            </div>
            <div className="experience_role_and_responsibilities_body_lists">
              <span className="experience_role_and_responsibilities_body_lists_title">
                Masters of Software Engineering
              </span>
              <ul className="experience_role_and_responsibilities_body_lists_ul">
                <li className="experience_role_and_responsibilities_body_lists_li">
                  System Verification
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Computer Networks & Security
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  DevOps & Cloud Computing
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Artificial Intelligence
                </li>
              </ul>



              <span className="experience_role_and_responsibilities_body_lists_title">
                {/* <FaStar id="award_icon" /> */}
                <span className="experience_role_and_responsibilities_body_lists_title">
                  Thesis Topic
                </span>
                {/* <span> - Best Final Year Project</span> */}
              </span>
              <ul className="experience_role_and_responsibilities_body_lists_ul">
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Trajectory Dynamics Based User Intent Prediction For Link Prefetching
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="experience_role_and_responsibilities_master">
          <div className="experience_role_and_responsibilities_header">
            <span className="experience_role_and_responsibilities_header_job_title">
              Institute of Space Technology
            </span>
            {/* <img
              alt="transformlondon_image_experience_role_and_responsibilities"
              src={ist_logo}
              id="transformlondon_image_experience_role_and_responsibilities"
              className="experience_role_and_responsibilitie_image"
            /> */}
          </div>
          <div className="experience_role_and_responsibilities_body">
            <div className="experience_role_and_responsibilities_body_timeline">
              <span className="experience_role_and_responsibilities_timeline_ending_span">
                2022
              </span>
              <hr className="experience_role_and_responsibilities_timeline_hr"></hr>
              <span className="experience_role_and_responsibilities_timeline_starting_span">
                2018
              </span>
            </div>
            <div className="experience_role_and_responsibilities_body_lists">
              <span className="experience_role_and_responsibilities_body_lists_title">
                Bachelors of Electrical Engineering
              </span>
              <ul className="experience_role_and_responsibilities_body_lists_ul">
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Electronics & Embedded Systems
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Computer Networks & Security
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Digital Signal Processing
                </li>
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Control Systems
                </li>
              </ul>



              <span className="experience_role_and_responsibilities_body_lists_title">
                <FaStar id="award_icon" />
                <span id="award_text">Awarded Gold Medal</span>
                {/* <span> - Best Final Year Project</span> */}
              </span>
              <ul className="experience_role_and_responsibilities_body_lists_ul">
                <li className="experience_role_and_responsibilities_body_lists_li">
                  Created award-winning sign-language glove using machine learning
                  and google translate API which outputs hand gestures to speech
                  in any language. Recognized with gold medal at university for best final year project.
                  <div className="icons_master_container">
                    <FaGithub
                      onClick={() => {
                        window.open(
                          "https://github.com/uzafirahmad/sign_language_glove",
                          "_blank"
                        );
                      }}
                      id="education_github_icon"
                      className="icon_education"
                    />
                    <FaYoutube
                      onClick={() => {
                        window.open(
                          "https://www.youtube.com/watch?v=KwxwMZN3S8A&t",
                          "_blank"
                        );
                      }}
                      id="education_youtube_icon"
                      className="icon_education"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Education;
