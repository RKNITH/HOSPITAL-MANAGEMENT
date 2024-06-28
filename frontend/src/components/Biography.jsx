import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="whoweare" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p style={{ color: "gray", fontWeight: "600" }}>
          MedixHub is dedicated to transforming healthcare delivery through
          advanced technology and compassionate care. Our platform connects
          patients with healthcare providers, offering seamless access to
          medical services and resources. We strive to enhance patient outcomes
          and improve the overall healthcare experience by leveraging
          state-of-the-art solutions and a patient-centered approach. At
          MedixHub, we are committed to shaping the future of healthcare,
          ensuring that every individual receives the care they deserve.
        </p>

        <p style={{ color: "gray" }}>
          At MedixHub, innovation and patient-centric care are at the heart of
          everything we do. We believe in harnessing the power of technology to
          create solutions that improve healthcare accessibility and quality.
          Our team is dedicated to pushing the boundaries of healthcare
          innovation, ensuring that patients receive personalized care that
          meets their unique needs. Together, we are redefining healthcare for
          a brighter future.
        </p>

      </div>
    </div>
  );
};

export default Biography;
