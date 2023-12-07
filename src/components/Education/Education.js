import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Education.css";
import award from "../../assets/award.svg";
import { FaYoutube, FaGithub } from "react-icons/fa";

const Education = () => {
  return (
    <div>
      <Navbar highlight="education" />
      <div className="blurrygradient_education" />
      <div className="education_child_div">
        <div
        id="degree_info_and_iframe_Master"
        >
          <div id="time_and_title_master_div">
            <div id="time_div">
              <span id="time_div_2018">2018</span>
              <hr id="hr_time_div"></hr>
              <span id="time_div_2022">2022</span>
            </div>
            <div id="title_div">
              <span id="title_div_university">
                Institute of Space Technology, Islamabad, Pakistan
              </span>
              <span id="title_div_degree">
                Bachelors of Electrical Engineering.
              </span>
            </div>
          </div>
          <iframe
            className="behance_container"
            src="https://www.behance.net/embed/project/173362605?ilo0=1"
            height="316"
            width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <div id="award_header_div">
          <span id="award_text">Awards</span>
          <img id="award_image" src={award} />
        </div>
        <div id="gold_medal_info_and_iframe">
          <div className="education_gold_medal_info_and_icons_master">
            <div id="education_gold_medal_title">
              Gold Medal for best Final Year Project
            </div>
            <div id="education_gold_medal_info">
              Created award-winning sign-language glove using machine learning
              and google translate API which outputs hand gestures to speech in
              any language. Recognized with gold medal at university.
            </div>
            <div className="icons_master_container">
              <div onClick={() => {
                  window.open(
                    "https://github.com/uzafirahmad/sign_language_glove",
                    "_blank"
                  );
                }} className="icon_container_education">
                <FaGithub className="icon_education" />
              </div>
              <div
              id="youtube_container_icon"
                onClick={() => {
                  window.open(
                    "https://www.youtube.com/watch?v=KwxwMZN3S8A&t",
                    "_blank"
                  );
                }}
                className="icon_container_education"
              >
                <FaYoutube className="icon_education" />
              </div>
            </div>
          </div>
          <iframe
            className="behance_container"
            src="https://www.behance.net/embed/project/173361195?ilo0=1"
            height="316"
            width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Education;
