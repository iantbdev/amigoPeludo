import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import DogShield from "../../../public/shield-dog-solid.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-0">
      <div className="container">
        <a href="/home" className="text-muted text-decoration-none lh-1">
          <img
            src={DogShield}
            alt="Logo"
            style={{ width: "40px", height: "40px" }}
          />
        </a>
        <span className="text-muted">©2024, Amigo Peludo</span>
      </div>

      <ul className="nav list-unstyled d-flex">
        <li>
          <a className="twitter" href="#">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </li>
        <li>
          <a className="instagram" href="#">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </li>
        <li>
          <a className="facebook" href="#">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
