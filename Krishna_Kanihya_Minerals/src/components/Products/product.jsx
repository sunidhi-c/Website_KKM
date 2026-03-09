import React from "react";
import "./product.css";
import productImage from "../../assets/product.jpeg"; // replace with your image

const Products = () => {

  const scrollToContact = () => {
    const element = document.getElementById("contact-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="products">

      <h2 className="products-title">Our Products</h2>

      <div className="product-card">

        <img src={productImage} alt="Dolomite Powder" className="product-image" />

        <div className="product-content">

          <h3>Dolomite Powder</h3>

          <p className="product-description">
            High brightness dolomite powder manufactured for consistent
            performance in chemical, industrial, and export applications.
          </p>

          <div className="product-details">
            <div><span>MOQ</span><span>500 Metric Ton</span></div>
            <div><span>Packaging Type</span><span>Poly Bag</span></div>
            <div><span>Form</span><span>Powder</span></div>
            <div><span>Brightness</span><span>95.50%</span></div>
            <div><span>Country of Origin</span><span>India</span></div>
            <div><span>Drying Process</span><span>Natural</span></div>
            <div><span>Application</span><span>Chemical Industry</span></div>
            <div><span>Calcium Carbonate</span><span>48.30%</span></div>
          </div>

          <div className="mesh-box">
            <strong>Mesh Sizes:</strong> 100 - 500 mesh, 10 - 20 microns
          </div>

        </div>
      </div>

    </section>
  );
};

export default Products;