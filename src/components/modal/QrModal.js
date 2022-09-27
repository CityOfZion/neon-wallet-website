import React from "react";
import Modal from "react-modal";

import cozQr from "../../images/coz-qr.png";
import walletQr from "../../images/wallet-qr.png";

const QrModal = ({ handleModalClose, modalId }) => (
  <Modal
    isOpen
    onRequestClose={handleModalClose}
    contentLabel="Modal"
    style={{
      overlay: {
        backgroundColor: "rgba(0, 0, 0, .5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      content: {
        position: "relative",
        marginLeft: "auto",
        marginRight: "auto",
        left: "auto",
        right: "auto",
        top: "auto",
        bottom: "auto",
        border: "none",
        borderBottom: "5px solid #69e27e"
      }
    }}
  >
    <div id="modal">
      <div id="close-icon" onClick={handleModalClose}>
        <i className="fa fa-times-thin fa-2x" aria-hidden="true" />
      </div>
      {modalId === "cozQRModal" && (
        <div>
          <div id="qr-label">Donate to City of Zion</div>
          <img alt="coz-qrs" src={cozQr} />
        </div>
      )}
      {modalId === "neonWallet" && (
        <div>
          <div id="qr-label">Donate to NEON Wallet Creators</div>
          <img alt="neon-wallet-creators-qr" src={walletQr} />
        </div>
      )}
    </div>
  </Modal>
);

export default QrModal;
