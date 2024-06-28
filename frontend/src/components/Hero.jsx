import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>

        <p>
          MedixHub is committed to revolutionizing healthcare delivery through
          innovation and technology. We strive to connect healthcare providers
          with patients seamlessly, offering accessible and personalized care
          solutions. Our mission is to empower individuals with the tools and
          resources needed to make informed decisions about their health.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
