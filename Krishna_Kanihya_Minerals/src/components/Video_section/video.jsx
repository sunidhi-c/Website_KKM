import React, { useEffect, useRef } from "react";
import "./video.css";
import videoFile from "../../assets/video.mp4";

const VideoSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 } // plays when 60% visible
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="video-section">
      <div className="video-container">
        <video
          ref={videoRef}
          src={videoFile}
          muted
          playsInline
          className="video-player"
        />
      </div>

      <div className="video-text">
        <h2 className="video-title">Explore Our Infrastructure</h2>
        <p>
          A glimpse into our modern infrastructure, advanced machinery, and sustainable mining
          practices ensuring top-quality mineral production. With skilled professionals and
          responsible methods, we deliver premium-grade minerals that meet global standards efficiently and reliably.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;