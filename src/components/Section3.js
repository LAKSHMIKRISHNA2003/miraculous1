import React from "react";
import "./Section3.css";

const Section3 = () => {
  return (
    <div className="section3-container">
      <h2 className="section3-title">LOCATION</h2>
      <div className="map-container">
        <iframe
          title="Google Maps Preview"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.43877290032!2d-74.11808650000001!3d40.7058316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254cb66b9cb17%3A0x26b82bcd6c8a64e!2sGoogle!5e0!3m2!1sen!2sus!4v1579631872598!5m2!1sen!2sus"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Section3;
