import React from "react";
import "./Hero.css";
import heroImage from "../../assets/hero_bg.jpg";

const Hero = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Premium Dolomite Powder Manufacturer and Global Supplier</h1>
          <p>
            Trusted Quality. Consistent Supply. Partner with Excellence.
          </p>

          {/* Button Group */}
          <div className="hero-buttons">
            <button
              className="btn"
              onClick={() => scrollToSection("products")}
            >
              Our Products
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;