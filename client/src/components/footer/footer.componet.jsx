import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import "./footer.style.css";

const Footer = () => {
  return (
    <footer className="container">
      <div className="hijo">
        <a href="https://www.linkedin.com/in/german-bisutti/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/German-Bisutti" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://dapper-syrniki-46fd10.netlify.app/" target="_blank">
          <RiContactsLine />
        </a>
      </div>
      <div>
        <p>German BIsutti | Full Stack Developer</p>
      </div>
    </footer>
  );
};

export default Footer;
