import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About_Us/About';
import Stats from './components/Figures/stats';
import Products from './components/Products/product';
import VideoSection from './components/Video_section/video';
import Gallery from './components/Gallery/photos';
import ContactUs from './components/Contact_Us/contact';

const App = () => {
  return (
    <div className='container'>
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <div id="home">
        <Hero />
      </div>

      {/* About Us Section */}
      <div id="about-us">
        <About />
      </div>

      {/* Stats Section (optional scroll) */}
      <div id="stats">
        <Stats />
      </div>

      {/* Products Section */}
      <div id="products">
        <Products />
      </div>

      {/* Gallery Section */}
      <div id="gallery">
        <Gallery />
      </div>

      {/* Video Section (optional scroll) */}
      <div id="video">
        <VideoSection />
      </div>

      {/* Contact Us Section */}
      <div id="contact-us">
        <ContactUs />
      </div>
    </div>
  );
}

export default App;