import React, { Component } from "react";
import rp from "request-promise";
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
    rp("https://api.github.com/repos/CityOfZion/neon-wallet/releases/latest")
      .then(response => {
        const parsed = JSON.parse(response);
        const updated = [];
        downloadOptions.forEach(option => {
          switch (option.id) {
            case "WINDOWS":
              option.href = parsed.assets.find(
                asset => asset.name.split(".").lastIndexOf("exe") > 0
              ).browser_download_url;
              break;
            case "MAC_OS":
              option.href = parsed.assets.find(
                asset => asset.name.split(".").lastIndexOf("dmg") > 0
              ).browser_download_url;
              break;
            case "LINUX_DEB":
              option.href = parsed.assets.find(
                asset => asset.name.split(".").lastIndexOf("deb") > 0
              ).browser_download_url;
              break;
            case "LINUX_APPIMAGE":
              option.href = parsed.assets.find(
                asset => asset.name.split(".").lastIndexOf("AppImage") > 0
              ).browser_download_url;
              break;
          }
          option.name = parsed.name;
          updated.push(option);
        });
        this.setState({
          downloadOptions: updated,
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

export default App;
