import React from "react";
import instaAd from '../../images/enamulhaque.dev.png';
import './Social.css';
const Social = () => {
  return (
    <div>
      {/* <Card className="mt-5 p-2 ms-3">
        <ul className="d-flex">
          <Card className="p-5 bg-primary">
            <li className="text-light h1 px-3">
              <FaFacebookF />
            </li>
            <p className="follow-count">4,00000</p>
            <p className="social-text">Followers</p>
          </Card>
          <Card className="p-5 bg-info">
            <li className="text-light h1 px-3">
              <FaTwitter />
            </li>
            <p className="follow-count">4,00000</p>
            <p className="social-text">Followers</p>
          </Card>
          <Card className="p-5 bg-primary">
            <li className="text-light h1 px-3">
              <FaLinkedinIn />
            </li>
            <p className="follow-count">4,00000</p>
            <p className="social-text">Followers</p>
          </Card>
        </ul>
      </Card> */}
      <a className="mt-5 pt-5" href="https://instagram.com/enamulhaque.dev">
      <img className="mt-5" src={instaAd} alt="enamulhaque.dev" />
      </a>
    </div>
  );
};

export default Social;
