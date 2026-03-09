import React, { useState, useEffect } from "react";
import "./About.css";
import { FaShieldAlt } from "react-icons/fa";

import cert1 from "../../assets/cert1.jpeg";
import cert2 from "../../assets/cert2.jpeg";
import analysisReport from "../../assets/analysis-report.pdf";

const AboutCTA = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const certificates = [cert1, cert2];

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % certificates.length);
    };

    const prevImage = () => {
        setCurrentImage(
            (currentImage - 1 + certificates.length) % certificates.length
        );
    };

    // Handle keyboard navigation
    useEffect(() => {
        if (!showPopup) return;

        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") {
                nextImage();
            } else if (e.key === "ArrowLeft") {
                prevImage();
            } else if (e.key === "Escape") {
                setShowPopup(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [showPopup, currentImage]);

    return (
        <div className="about-cta">
            <h2>WHY GLOBAL BUYERS CHOOSE US</h2>

            {/* VERIFIED SHIELD BADGE */}
            <div
                className="why-badge"
                style={{ cursor: "pointer" }}
                onClick={() => window.open(analysisReport, "_blank")}
            >
                <FaShieldAlt className="shield-icon" />
                <span>Verified Chemical Report</span>
            </div>

            <div className="why-buttons">
                <button
                    className="btn-outline"
                    onClick={() => setShowPopup(true)}
                >
                    View Certifications
                </button>
            </div>

            {showPopup && (
                <div
                    className="popup-overlay"
                    onClick={() => setShowPopup(false)}
                >
                    <div
                        className="popup-box"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span
                            className="popup-close"
                            onClick={() => setShowPopup(false)}
                        >
                            &times;
                        </span>

                        <button className="prev-btn" onClick={prevImage}>
                            ❮
                        </button>

                        <img
                            src={certificates[currentImage]}
                            alt="Certification"
                            className="popup-image"
                        />

                        <button className="next-btn" onClick={nextImage}>
                            ❯
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutCTA;