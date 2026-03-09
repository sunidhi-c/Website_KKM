import React, { useState } from "react";
import "./contact.css";

const ContactUs = () => {
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      requirements: formData.get("requirements")
    };

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatusMsg("✅ Your request has been submitted!");
        e.target.reset();
      } else {
        setStatusMsg("❌ Failed to send message.");
      }
    } catch (error) {
      setStatusMsg("❌ Server error.");
    }
  };

  return (
    <div className="contactus-section">
      <div className="contactus-grid">

        {/* Left Column - Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>

          {/* Name & Email Row */}
          <div className="name-email-row">
            <div className="input-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
          </div>

          {/* Requirements Textarea */}
          <div className="input-group full-width">
            <textarea
              name="requirements"
              placeholder="Tell us your requirements (Quantity, delivery port, specifications...)"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">Submit</button>
          {statusMsg && <p className="status-msg">{statusMsg}</p>}
        </form>

        {/* Right Column - Company Details */}
        <div className="company-details">
          <h2>Company Details</h2>

          <div className="details-section">
            <h4>Key Contact</h4>
            <p>CEO - Mr. Ramesh Chandra Teli</p>
            <p>(Krishna Kanhaiya Minerals)</p>
          </div>

          <div className="details-section">
            <h4>Address</h4>
            <p>Kelwa-Amer Road, BAMANTUKDA</p>
            <p>Rajsamand, Rajasthan - 313334, India</p>
          </div>

          <div className="details-section">
            <h4>General Enquiries</h4>
            <p>+91 95872 76645</p>
            <p>+91 99507 22254</p>
            <p>rameshchandra6645@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;