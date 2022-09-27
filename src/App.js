import React, { Component } from "react";
import axios from "axios";
import LandingPage from "./components/landing-page/LandingPage";
import Footer from "./components/footer/Footer";
import QrModal from "./components/modal/QrModal";
import { downloadOptions, latestRelease } from "./config";

import "./App.css";

class App extends Component {
  state = {
    modalId: null,
    downloadOptions: downloadOptions,
    latestReleaseUrl: latestRelease
  };

  componentDidMount() {
    // NOTE: If this request fails the default downloadOptions from config.js will be leveraged.
    axios.get("https://api.github.com/repos/CityOfZion/neon-wallet/releases/latest")
      .then(response => {
        const parsed = JSON.parse(response);
        const mostRecentOptions = mapGithubResponseToOptions(
          parsed,
          downloadOptions
        );
        this.setState({
          downloadOptions: mostRecentOptions,
          latestReleaseUrl: parsed.html_url
        });
      })
      .catch(err => {
        console.error(
          "Request to https://api.github.com/repos/CityOfZion/neon-wallet/releases/latest failed!",
          err
        );
      });
  }

  render() {
    return (
      <div className="App">
        {(this.state.modalId === "cozQRModal" ||
          this.state.modalId === "neonWallet") && (
          <QrModal
            modalId={this.state.modalId}
            handleModalClose={() => {
              this.setState({ modalId: null });
            }}
          />
        )}
        <LandingPage {...this.state} />
        <Footer handleModalClick={id => this.setState({ modalId: id })} />
      </div>
    );
  }
}

function mapGithubResponseToOptions(data, downloadOptions) {
  function generateSizeString(bytes, fileExt) {
    return `${(bytes / 1000000).toFixed(2)} MB (Neon.${fileExt})`;
  }

  function findAndMapOption(option) {
    if (option.fileExtension) {
      const asset = data.assets.find(
          asset => asset.name.split(".").lastIndexOf(option.fileExtension) > 0
      );
      option.href = asset.browser_download_url;
      option.size = generateSizeString(asset.size, option.fileExtension);
      console.log(option.size)
    }
    return option;
  }

  return downloadOptions.map(findAndMapOption);
}

export default App;
