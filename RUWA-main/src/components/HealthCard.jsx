
// import React, { useMemo } from "react";

// const JanArogyaCard = () => {
//   // Generate a random ID once (when component mounts)
//   const randomId = useMemo(() => {
//     const parts = Array(3)
//       .fill(0)
//       .map(() => Math.floor(1000 + Math.random() * 9000));
//     return `${parts[0]}-${parts[1]}-${parts[2]}`;
//   }, []);

//   // Use barcode generator site like barcode.tec-it.com to create barcode image for `randomId`
//   const barcodeUrl = `https://barcode.tec-it.com/barcode.ashx?data=${randomId}&code=Code128&dpi=96`;

//   return (
//     <div
//       className="position-relative mx-auto"
//       style={{
//         width: "430px",
//         height: "270px",
//         backgroundImage: `url(${"/assets/images/cardbg.png"})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         borderRadius: "10px",
//         boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
//         overflow: "hidden",
//         fontFamily: "sans-serif",
//         color: "#000"
//       }}
//     >
//       {/* Photo */}
//       <img
//         src="/assets/images/person-sq-1-min.jpg"
//         alt="profile"
//         style={{
//           position: "absolute",
//           top: "70px",
//           left: "25px",
//           width: "90px",
//           height: "100px",
//           objectFit: "cover",
//           borderRadius: "4px"
//         }}
//       />

//       {/* Logo */}
//       <img
//         src="/assets/images/ruwalogocolor.png"
//         alt="logo"
//         style={{
//           position: "absolute",
//           top: "35px",
//           right: "10px",
//           width: "65px"
//         }}
//       />

//       {/* Title */}
//       <div
//         style={{
//           position: "absolute",
//           top: "35px",
//           left: "135px",
//           fontSize: "20px",
//           fontWeight: "bold"
//         }}
//       >
//         JAN AROGAY CARD
//         <hr className="fw-1 fs-1 line mt-auto" />
//       </div>

//       {/* Details */}
//       <div
//         style={{
//           position: "absolute",
//           top: "85px",
//           left: "135px",
//           fontSize: "15px",
//           lineHeight: "1.6"
//         }}
//       >
//         <div>
//           <strong>Name</strong> : Hrishabh gupta
//         </div>
//         <div>
//           <strong>Gender</strong> : Male
//         </div>
//         <div>
//           <strong>DOB</strong> : 14/07/2000
//         </div>
//       </div>

//       {/* 1D Barcode */}
//       <img
//         src={barcodeUrl}
//         alt="barcode"
//         style={{
//           position: "absolute",
//           bottom: "55px",
//           left: "135px",
//           height: "50px"
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           bottom: "28px",
//           left: "135px",
//           fontSize: "22px",
//           fontWeight: "bold",
//           letterSpacing: "2px"
//         }}
//       >
//         {randomId}
//       </div>
//     </div>
//   );
// };

// export default JanArogyaCard;
import React, { useState, useEffect } from "react";
import Barcode from "react-barcode";

const JanArogyaCard = () => {
  const [randomId, setRandomId] = useState("");
  const name=localStorage.getItem("name")
  useEffect(() => {
    // Generate a random 12-digit ID
    const generateRandomId = () => {
      const part1 = Math.floor(1000 + Math.random() * 9000);
      const part2 = Math.floor(1000 + Math.random() * 9000);
      const part3 = Math.floor(1000 + Math.random() * 9000);
      return `${part1}-${part2}-${part3}`;
    };
    setRandomId(generateRandomId());
  }, []);

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
      {/* Photo */}
      <img
        src="/assets/images/person-sq-1-min.jpg"
        alt="profile"
        style={{
          position: "absolute",
          top: "70px",
          left: "25px",
          width: "90px",
          height: "100px",
          objectFit: "cover",
          borderRadius: "4px"
        }}
      />

      {/* Logo */}
      <img
        src="/assets/images/ruwalogocolor.png"
        alt="logo"
        style={{
          position: "absolute",
          top: "35px",
          right: "10px",
          width: "65px"
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "35px",
          left: "135px",
          fontSize: "20px",
          fontWeight: "bold"
        }}
      >
        JAN AROGAY CARD
        <hr className="fw-1 fs-1 line mt-auto" />
      </div>

      {/* Details */}
      <div
        style={{
          position: "absolute",
          top: "85px",
          left: "135px",
          fontSize: "15px",
          lineHeight: "1.6"
        }}
      >
        <div>
          <strong>Name</strong> : {name}
        </div>
        <div>
          <strong>Gender</strong> : Male
        </div>
        <div>
          <strong>DOB</strong> : 14/07/2000
        </div>
      </div>

      {/* Barcode using react-barcode */}
      <div
        style={{
          position: "absolute",
          bottom: "55px",
          left: "135px"
        }}
      >
        <Barcode
          value={randomId}
          format="CODE128"
          width={1}
          height={40}
          displayValue={false}
          background="transparent"
        />
      </div>

      {/* ID Number Display */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "135px",
          fontSize: "22px",
          fontWeight: "bold",
          letterSpacing: "2px"
        }}
      >
        {randomId}
      </div>
    </div>
  );
};

export default JanArogyaCard;
