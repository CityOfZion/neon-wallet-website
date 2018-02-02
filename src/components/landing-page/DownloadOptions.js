import React from "react";

const DownloadOptions = ({ options }) => (
  <div id="download-options-container">
    {options.map(option => (
      <div key={option.id} id="option">
        <div id="display">{option.display}</div>
        <div id="size">{option.size}</div>
        <DownloadButton downloadLink={option.href} icon={option.icon} />
      </div>
    ))}
  </div>
);

const DownloadButton = ({ downloadLink, icon }) => (
  <a href={downloadLink}>
    <div id="download-button">
      Download <img src={icon} />
    </div>
  </a>
);

export default DownloadOptions;
