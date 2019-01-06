import React from "react";
import DownloadOptions from "./DownloadOptions";
import logo from "../../images/Neon_Logo_Dark.svg";

const LandingPage = props => (
  <div className="landing-page-container">
    <div id="details-container">
      <div id="details">
        <img id="neon-logo" src={logo} alt="neon-logo" />
        <div id="description">
          An open source <span id="white"> cross-platform light wallet</span>
          for the NEO blockchain available on Windows, Mac OS, and Linux.
        </div>
        <DownloadOptions options={props.downloadOptions} />
        <a href={props.latestReleaseUrl} target="blank">
          Latest release information and checksum hashes.
        </a>
      </div>
    </div>
    <div id="screen-shot">
      <div id="screen-shot-container" />
    </div>
  </div>
);

// NOT IN USE
// const Navigation = () => (
//   <nav>
//     <a href="https://cityofzion.io/">
//       <img src={coz} />
//     </a>
//   </nav>
// );

export default LandingPage;
