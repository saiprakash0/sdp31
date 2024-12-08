import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import './ApplyScholarship.css'; // Import the CSS file

const ApplyScholarship = () => {
  const [scholarships, setScholarships] = useState([]);
  const navigate = useNavigate(); // Initialize navigate for redirection

  // Mocked scholarship data
  const mockData = [
    {
      id: 1,
      title: "National Merit Scholarship",
      description: "Awarded based on academic excellence in high school. Recognizes the most outstanding students in the United States.",
      amount: "12,500",
      eligibilityCriteria: "High school seniors with exceptional academic records and PSAT/NMSQT scores.",
      deadline: "March 31, 2024"
    },
    {
      id: 2,
      title: "Google Women in Tech Scholarship",
      description: "Scholarship for women pursuing a career in technology, sponsored by Google.",
      amount: "15,000",
      eligibilityCriteria: "Women studying computer science, computer engineering, or a closely related field.",
      deadline: "April 15, 2024"
    },
    {
      id: 3,
      title: "Rhodes Scholarship",
      description: "The oldest and one of the most prestigious international fellowship programs. It provides full funding for postgraduate study at the University of Oxford.",
      amount: "Full Tuition and Stipend",
      eligibilityCriteria: "Open to graduates from participating countries who have demonstrated leadership in academics, extracurricular activities, and service.",
      deadline: "October 1, 2024"
    }
    // Add more scholarships as needed
  ];

  // Set the mock data as the main scholarships data
  useEffect(() => {
    setScholarships(mockData);
  }, []);

  // Redirect to the Scholarship Application Form page
  const handleApplyClick = (scholarshipId) => {
    navigate(`/apply-scholarship/${scholarshipId}`); // Redirect to the application form page with scholarshipId
  };

  // Handle form submission
  const handleSubmitApplication = (scholarshipId) => {
    alert(`Application for Scholarship ID: ${scholarshipId} submitted successfully!`);
    // You can integrate an actual form submission logic here to send data to the backend
  };

  return (
    <div className="container">
      <h1>Apply for Scholarship</h1>
      {scholarships && scholarships.length > 0 ? (
        scholarships.map((scholarship) => (
          <div key={scholarship.id} className="scholarship-card">
            <h2>{scholarship.title}</h2>
            <p>{scholarship.description}</p>
            <p><strong>Amount:</strong> {scholarship.amount}</p>
            <p><strong>Eligibility:</strong> {scholarship.eligibilityCriteria}</p>
            <p><strong>Deadline:</strong> {scholarship.deadline}</p>

            {/* Button to apply for scholarship */}
            <button onClick={() => handleApplyClick(scholarship.id)}>
              Apply
            </button>

            {/* Submit button for scholarship application */}
            <button onClick={() => handleSubmitApplication(scholarship.id)} className="submit-button">
              Submit Application
            </button>
          </div>
        ))
      ) : (
        <div className="no-scholarships">
          <h3>Currently, there are no scholarships available. Here's some information about available scholarships:</h3>
          <ul>
            <li>
              <strong>National Merit Scholarship</strong><br />
              Description: Awarded based on academic excellence in high school. Recognizes the most outstanding students in the United States.<br />
              Amount: $2,500<br />
              Eligibility: High school seniors with exceptional academic records and PSAT/NMSQT scores.<br />
              Deadline: March 31, 2024
            </li>
            <li>
              <strong>Google Women in Tech Scholarship</strong><br />
              Description: Scholarship for women pursuing a career in technology, sponsored by Google.<br />
              Amount: $5,000<br />
              Eligibility: Women studying computer science, computer engineering, or a closely related field.<br />
              Deadline: April 15, 2024
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ApplyScholarship;
