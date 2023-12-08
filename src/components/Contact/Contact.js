import React, { useEffect, useState } from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import { FaDiscord, FaWhatsapp, FaInstagram, FaCheck, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  const [copied, setcopied] = useState("");

  useEffect(() => {
    // Create a timeout and store its ID
    const timeoutId = setTimeout(() => {
      setcopied("");
    }, 2000);

    // Cleanup function to clear the timeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, [copied]);

  return (
    <div>
      {copied !== "" && (
        <span id="copied_contact_span">
          {copied === "discord" && <span>Discord ID Copied!</span>}
          {copied === "instagram" && <span>Instagram Page Opened!</span>}
          {copied === "whatsapp" && <span>WhatsApp Chat Opened!</span>}
          {copied === "gmail" && <span>Gmail Address Copied!</span>}
          {copied === "linkedin" && <span>LinkedIn Page Opened!</span>}
        </span>
      )}
      <Navbar highlight="contact" />
      <div id="page_center_contact">
        <span className="pagetitle_contact">Wanna Link?</span>
        <span className="secondarytitle_contact">Hit Me Up!</span>
        <div className="contact_icon_container_grid">
          <div
            onClick={() => {
              setcopied("discord")
              navigator.clipboard.writeText(".wintern")
            }}
            className="contact_icon_container"
          >
            {copied === "discord" ? (
              <FaCheck
                className="contact_icon_check"
              />
            ) : (
              <FaDiscord className="contact_icon" />
            )}
          </div>
          <div
            onClick={() => {
              const phoneNumber = "+923255275024";
          
              // Set the copied state
              setcopied("whatsapp");
          
              // Open WhatsApp web chat link
              const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}`;
              window.open(whatsappUrl, "_blank");
            }}
            className="contact_icon_container"
          >
            {copied === "whatsapp" ? (
              <FaCheck
                className="contact_icon_check"
              />
            ) : (
              <FaWhatsapp className="contact_icon" />
            )}
          </div>
          <div
            onClick={() => {          
              // Set the copied state
              setcopied("instagram");
          
              // Open WhatsApp web chat link
              const instaUrl = `https://instagram.com/uzafirahmad`;
              window.open(instaUrl, "_blank");
            }}
            className="contact_icon_container"
          >
            {copied === "instagram" ? (
              <FaCheck
                className="contact_icon_check"
              />
            ) : (
              <FaInstagram className="contact_icon" />
            )}
          </div>
          <div
            onClick={() => {
              setcopied("gmail");
              navigator.clipboard.writeText("uzafir525@gmail.com")
            }}
            className="contact_icon_container"
          >
            {copied === "gmail" ? (
              <FaCheck
                className="contact_icon_check"
              />
            ) : (
              <BiLogoGmail className="contact_icon" />
            )}
          </div>
          <div
            onClick={() => {          
              // Set the copied state
              setcopied("linkedin");
          
              // Open WhatsApp web chat link
              const instaUrl = `https://www.linkedin.com/in/uzafir-ahmad/`;
              window.open(instaUrl, "_blank");
            }}
            className="contact_icon_container"
          >
            {copied === "linkedin" ? (
              <FaCheck
                className="contact_icon_check"
              />
            ) : (
              <FaLinkedin className="contact_icon" />
            )}
          </div>
        </div>
      </div>
      <div className="blurrygradient_2_contact" />
      <div className="blurrygradient_1_contact" />
    </div>
  );
};

export default Contact;
