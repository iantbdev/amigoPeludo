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
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center container">
        <a
          href="/home"
          className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          <img
            src={DogShield}
            alt="Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
        </a>
        <span className="mb-3 mb-md-0 text-muted">©2024, Amigo Peludo</span>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="twitter" href="#">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </li>
          <li className="ms-3">
            <a className="instagram" href="#">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
          <li className="ms-3">
            <a className="facebook" href="#">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
