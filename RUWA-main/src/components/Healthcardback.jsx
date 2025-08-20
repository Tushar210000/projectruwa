import React from "react";
// import cardbg from "../assets/jancardbg.png";

const JanArogyaCardBack = () => {
  return (
    <div
      className="position-relative mx-auto"
      style={{
        width: "430px",
        height: "270px",
        backgroundImage: `url(${"/assets/images/cardbg.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        overflow: "hidden",
        fontFamily: "sans-serif",
        color: "#000"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "30px",
          right: "30px",
          fontSize: "14px",
          lineHeight: "1.3",
          textAlign: "justify"
        }}
      >
        <h5 className="fw-bold text-center mt-2 mb-3" style={{ fontSize: "16px" }}>
          Terms & Conditions
        </h5>
        <ol style={{ paddingLeft: "18px" }}>
          <li>This card is valid only for RUWA-approved centers.</li>
          <li>The cardholder must carry a valid ID proof during checkup.</li>
          <li>Misuse of the card may lead to cancellation without notice.</li>
          <li>This card is non-transferable and non-refundable.</li>
          <li>All benefits are subject to change as per government policy.</li>
        </ol>
      </div>

      <div
        style={{
          position: "absolute",
        //   top:"10px",
          bottom: "40px",
          left: "30px",
          right: "30px",
          fontSize: "12px",
          textAlign: "center",
          fontStyle: "italic",
          color: "#333"
        }}
      >
        For queries contact: info@ruwaindia.com | +91 xxxxx xxxxx
      </div>
    </div>
  );
};

export default JanArogyaCardBack; 