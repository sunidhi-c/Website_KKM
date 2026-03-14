import React, { useState, useEffect } from "react";
import "./photos.css";

const gallery_data = [
    {
        title: "View Production Unit",
        cover: "/images/production/prod1.jpeg",
        gallery: [
            "/images/production/prod1.jpeg",
            "/images/production/prod2.jpeg",
            "/images/production/prod3.jpeg",
            "/images/production/prod4.jpeg",
            "/images/production/prod5.jpeg",
            "/images/production/prod6.jpeg",
            "/images/production/prod7.jpeg",
            "/images/production/prod8.jpeg",
        ],
    },
    {
        title: "Take a Plant Tour",
        cover: "/images/plant/plant1.jpeg",
        gallery: [
            "/images/plant/plant1.jpeg",
            "/images/plant/plant2.jpeg",
            "/images/plant/plant3.jpeg",
            "/images/plant/plant4.jpeg",
            "/images/plant/plant5.jpeg",
            "/images/plant/plant6.jpeg",
            "/images/plant/plant7.jpeg",
            "/images/plant/plant8.jpeg",
            "/images/plant/plant9.jpeg",
        ],
    },
    {
        title: "Explore Warehouse Storage",
        cover: "/images/warehouse/warehouse1.jpeg",
        gallery: [
            "/images/warehouse/warehouse1.jpeg",
            "/images/warehouse/warehouse2.jpeg",
            "/images/warehouse/warehouse3.jpeg",
            "/images/warehouse/warehouse4.jpeg",
            "/images/warehouse/warehouse5.jpeg",
        ],
    },
];

const Gallery = () => {
    const [selectedGallery, setSelectedGallery] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    // Touch swipe state
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);

    // Fullscreen navigation
    const openImage = (index) => setSelectedIndex(index);
    const closeImage = () => setSelectedIndex(null);
    const nextImage = () => {
        if (selectedGallery && selectedIndex !== null) {
            setSelectedIndex(
                (selectedIndex + 1) % selectedGallery.gallery.length
            );
        }
    };
    const prevImage = () => {
        if (selectedGallery && selectedIndex !== null) {
            setSelectedIndex(
                (selectedIndex - 1 + selectedGallery.gallery.length) %
                selectedGallery.gallery.length
            );
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedGallery && selectedIndex !== null) {
                if (e.key === "ArrowRight") nextImage();
                else if (e.key === "ArrowLeft") prevImage();
                else if (e.key === "Escape") closeImage();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedGallery, selectedIndex]);

    // Swipe handling for mobile
    const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
    const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
    const handleTouchEnd = () => {
        if (!touchStartX || !touchEndX) return;
        const diff = touchStartX - touchEndX;
        if (diff > 50) nextImage(); // swipe left → next
        else if (diff < -50) prevImage(); // swipe right → prev
        setTouchStartX(null);
        setTouchEndX(null);
    };

    return (
        <div className="gallery-section">
            <h2>Our Facilities and Operations</h2>

            {/* Gallery Cards */}
            <div className="card-container">
                {gallery_data.map((item, index) => (
                    <div
                        key={index}
                        className="facility-card"
                        onClick={() => setSelectedGallery(item)}
                    >
                        <img src={item.cover} alt={item.title} />
                        <div className="overlay">
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal with thumbnails */}
            {selectedGallery && selectedIndex === null && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedGallery(null)}
                >
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <span
                                className="close-btn"
                                onClick={() => setSelectedGallery(null)}
                            >
                                &times;
                            </span>
                            <h3>{selectedGallery.title}</h3>
                        </div>

                        <div className="gallery">
                            {selectedGallery.gallery.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`gallery ${i}`}
                                    onClick={() => openImage(i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Fullscreen viewer */}
            {selectedGallery && selectedIndex !== null && (
                <div
                    className="image-viewer-overlay"
                    onClick={closeImage}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <span
                        className="arrow left"
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                    >
                        &#10094;
                    </span>

                    <img
                        src={selectedGallery.gallery[selectedIndex]}
                        alt={`Full ${selectedIndex}`}
                        className="image-viewer"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <span
                        className="arrow right"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                    >
                        &#10095;
                    </span>
                </div>
            )}
        </div>
    );
};

export default Gallery;
