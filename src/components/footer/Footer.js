import React from "react";

import githubIcon from "../../images/github.png";
import fbIcon from "../../images/facebook.png";
import discordIcon from "../../images/discord.png";
import redditIcon from "../../images/reddit.png";

const donationLinks = [
  {
    display: "Donate to City of Zion",
    address: "AXSoNQEKjmqPBNPg5cNrHyWivfjok3Vj9D",
    modalId: "cozQRModal"
  },
  {
    display: "Donate to NEON wallet creators",
    address: "Adr3XjZ5QDzVJrWvzmsTTchpLRRGSzgS5A",
    modalId: "neonWallet"
  }
];

const Donations = ({ handleModalClick }) =>
  donationLinks.map(e => (
    <div key={e.modalId} id="donation">
      <div id="description">{e.display}</div>
      <div id="address">{e.address}</div>
      <div id="modal-link">
        <a
          href=""
          target="blank"
          onClick={event =>
            event.preventDefault() || handleModalClick(e.modalId)
          }
        >
          <i className="fa fa-external-link-square" aria-hidden="true" /> Launch
          QR Code
        </a>
      </div>
    </div>
  ));

const Footer = ({ handleModalClick }) => (
  <footer>
    <div id="footer-content">
      <Donations handleModalClick={handleModalClick} />
      <div id="social">
        <div id="description">Join us at City of Zion!</div>
        <div id="social-links">
          <a
            href="https://github.com/CityOfZion/neon-wallet"
            id="link"
            target="blank"
          >
            Github <img src={githubIcon} />
          </a>
          <a
            href="https://www.facebook.com/CityOfZionOfficial"
            id="link"
            target="blank"
          >
            Facebook <img src={fbIcon} />
          </a>
          <a href="https://discord.gg/R8v48YA" id="link" target="blank">
            Discord <img src={discordIcon} />
          </a>
          <a href="https://www.reddit.com/r/NEO/" id="link" target="blank">
            Reddit <img src={redditIcon} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
