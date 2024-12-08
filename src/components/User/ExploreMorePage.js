import React from "react";

import './ExploreMorePage.css'; // Import the CSS file

const ExploreMorePage = () => {
  return (
    <div className="container explore-container">
      <h2>Contact Information</h2>
      <div className="contact-details">
        <div className="contact-item">
          <h3>Email:</h3>
          <p>contact@scholarshipplatform.gov</p>
        </div>
        <div className="contact-item">
          <h3>Phone Number:</h3>
          <p>+91 7671893333</p>
        </div>
        <div className="contact-item">
          <h3>Address:</h3>
          <p>123 Government Avenue, vijayawada, Andhra Pradesh State, 521241</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreMorePage;
