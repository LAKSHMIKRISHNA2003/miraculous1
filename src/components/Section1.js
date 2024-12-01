import React from "react";
import "./Section1.css"; // Assuming you create a CSS file for styling

// Import images
import img1 from '../assets/images/3.png';

const Services = () => {
  const cards = [
    { title: "CLIPPER SHAVE", price: "20$", time: "30MIN", image:img1, link: "/appointment" },
    { title: "HAIRCUT", price: "30$", time: "45MIN", image: img1, link: "/appointment" },
    { title: "BEARD TRIM", price: "15$", time: "20MIN", image:img1, link: "/appointment" },
    { title: "FACIAL", price: "40$", time: "60MIN", image:img1, link: "/appointment#" },
  ];

  return (
    <div id="services"className="services-section">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="services-cards">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            className="services-card"
          >
            <img
              src={card.image}
              alt={card.title}
              className="services-card-image"
            />
            <div className="services-card-content">
              <h3>{card.title}</h3>
              <p>
                {card.price} | {card.time}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;
