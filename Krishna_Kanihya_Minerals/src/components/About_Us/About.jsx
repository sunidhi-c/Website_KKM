import React from "react";
import "./About.css";
import aboutImage from "../../assets/about.jpg";

import Features from "./features";
import AboutCTA from "./buttons";

const About = () => {
  return (
    <section className="about">

      {/* Left Side */}
      <div className="about-text">
        <p className="about-tag">
          ABOUT KRISHNA KANHAIYA MINERALS
        </p>

        <p className="about-desc">
          Krishna Kanhaiya Minerals is a trusted manufacturer and exporter of
          high-quality dolomite products, serving global industries with
          consistent quality, transparent processes, and on-time deliveries.
        </p>

        {/* Features Component */}
        <Features />

        {/* CTA Component */}
        <AboutCTA />

      </div>

      {/* Right Side */}
      <div className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div>

    </section>
  );
};

export default About;