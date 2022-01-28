import React from "react";
import "./SocialMedia.styles.scss";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import youTube from "../../assets/images/youTube.svg";

export function SocialMedia({ search }) {
  return (
    <ul className="social-media">
      <li>
        <a href="#facebook">
          <img src={facebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="#twitter">
          <img src={twitter} alt="Twitter" />
        </a>
      </li>
      <li>
        <a href="#instagram">
          <img src={instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="#youtube">
          <img src={youTube} alt="YouTube" />
        </a>
      </li>
      {search}
    </ul>
  );
}
