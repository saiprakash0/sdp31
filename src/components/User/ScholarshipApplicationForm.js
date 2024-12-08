import React from 'react';
import './ScholarshipOpportunities.css';

const ScholarshipOpportunities = () => {
  const scholarships = [
    {
      name: 'National Merit Scholarship Program',
      description: 'A scholarship program for U.S. high school students based on their PSAT/NMSQT scores.',
      eligibility: 'High school seniors in the U.S.',
      deadline: 'March 31, 2024',
      link: 'https://www.nationalmerit.org'
    },
    {
      name: 'Fulbright Program',
      description: 'A scholarship program for graduate students and young professionals to study abroad.',
      eligibility: 'Graduate students and young professionals',
      deadline: 'October 15, 2024',
      link: 'https://www.cies.org/program/fulbright-us-student-program'
    },
    {
      name: 'Gates Millennium Scholars Program',
      description: 'Provides full tuition, fees, and other support for students from underrepresented backgrounds.',
      eligibility: 'Underrepresented minority students in the U.S.',
      deadline: 'January 10, 2024',
      link: 'https://www.gmsp.org'
    },
    {
      name: 'Rhodes Scholarship',
      description: 'An international postgraduate award for students to study at the University of Oxford.',
      eligibility: 'Graduates of universities in various countries worldwide',
      deadline: 'October 1, 2024',
      link: 'https://www.rhodeshouse.ox.ac.uk'
    },
    {
      name: 'Google Scholarship for Women in Tech',
      description: 'A scholarship program designed to support women pursuing a career in technology.',
      eligibility: 'Female students pursuing a computer science degree',
      deadline: 'March 31, 2024',
      link: 'https://www.google.com/edu/scholarships'
    }
  ];

  return (
    <div className="scholarship-container">
      <h2 className="scholarship-title">Scholarship Opportunities</h2>
      <div className="scholarship-list">
        {scholarships.map((scholarship, index) => (
          <div key={index} className="scholarship-card">
            <h3 className="scholarship-name">{scholarship.name}</h3>
            <p className="scholarship-description">{scholarship.description}</p>
            <p className="scholarship-eligibility"><strong>Eligibility:</strong> {scholarship.eligibility}</p>
            <p className="scholarship-deadline"><strong>Deadline:</strong> {scholarship.deadline}</p>
            <a href={scholarship.link} className="scholarship-link" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScholarshipOpportunities;
