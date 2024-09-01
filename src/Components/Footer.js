import React from "react";
import { faLinkedin, faGithub, faDiscord, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex flex-col w-full text-white items-center justify-center py-5 bg-[#02060c]">
        <p className="mt-3 justify-between">❤️ Made with Love for Food by Aditya 💛</p>
        <div className="my-3 flex items-center justify-center">
          <a
            className="ml-3 text-4xl transition-all hover:text-linkedIn"
            href="https://www.linkedin.com/in/adityasharma024"
            target="_blank"
            title="Aditya's Linkedin Profile"
          >
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
          <a
            className="ml-3 text-4xl transition-all hover:text-github"
            href="https://github.com/adityasharma024"
            target="_blank"
            title="Aditya's GitHub repo"
          >
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a
            className="ml-3 text-3xl transition-all hover:text-twitter"
            href="https://twitter.com.adityas024"
            target="_blank"
            title="Aditya's Twitter Profile"
          >
            <FontAwesomeIcon icon={faXTwitter}/>
          </a>
          <a
            className="ml-3 text-3xl transition-all hover:text-discord"
            href="https://www.instagram.com/aditya____sharma_/"
            target="_blank"
            title="Aditya's Discord Profile"
          >
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
        </div>
        <p className="pb-10" title="Just Kiddin' There is no Copyright for this">©️ 2024 FoodVilla</p>
    </div>
  );
};

export default Footer;
