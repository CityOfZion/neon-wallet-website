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
        backgroundColor: "rgba(18, 18, 44, 0.91)",
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
        borderBottom: "#4696ff solid 5px"
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
          <div id="down-arrow" />
          <img src={cozQr} />
        </div>
      )}
      {modalId === "neonWallet" && (
        <div>
          <div id="qr-label">Donate to NEON Wallet Creators</div>
          <div id="down-arrow" />
          <img src={walletQr} />
        </div>
      )}
    </div>
  </Modal>
);

export default QrModal;
