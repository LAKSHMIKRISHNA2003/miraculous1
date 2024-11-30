import React from "react";
import "./Section2.css";

const Section2 = () => {
  return (
    <div className="section2-container">
      <h2 className="section2-title">WHAT CUSTOMERS SAY</h2>
      <div className="section2-card-container">
        <div className="section2-card white-card">
          <h3 className="section2-card-title">Title</h3>
          <p className="section2-card-text">
            Add a little bit of body text Add a little bit of body text Add a
            little bit of body text
          </p>
        </div>
        <div className="section2-card gold-card">
          <h3 className="section2-card-title white-title">Title</h3>
          <p className="section2-card-text white-text">
            <span className="white-title">Add a little bit of body text Add a little bit of body text Add a
            little bit of body text</span>
          </p>
        </div>
        <div className="section2-card white-card">
          <h3 className="section2-card-title">Title</h3>
          <p className="section2-card-text">
            Add a little bit of body text Add a little bit of body text Add a
            little bit of body text
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
