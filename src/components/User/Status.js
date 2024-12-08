import React, { useState } from "react";

// Example data for the application status with progress percentages
const applicationStatuses = [
  { id: 1, name: "National Merit Scholarship", status: "Pending", progress: 40 },
  { id: 2, name: "Google Women in Tech Scholarship", status: "Approved", progress: 100 },
  { id: 3, name: "Scholarship C", status: "Rejected", progress: 0 },
];

const Status = () => {
  const [statuses, setStatuses] = useState(applicationStatuses);

  // Function to handle status update
  const updateStatus = (id, newStatus, newProgress) => {
    const updatedStatuses = statuses.map((status) =>
      status.id === id ? { ...status, status: newStatus, progress: newProgress } : status
    );
    setStatuses(updatedStatuses);
  };

  return (
    <div className="status-container">
      <h2>Application Status</h2>
      <p>Here is the status of your scholarship application.</p>

      <div className="status-list">
        {statuses.length > 0 ? (
          statuses.map((application) => (
            <div
              key={application.id}
              className={`status-card ${application.status.toLowerCase()}`}
            >
              <h3>{application.name}</h3>
              <p>Status: <strong>{application.status}</strong></p>

              {/* Progress Bar */}
              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: `${application.progress}%` }}
                ></div>
              </div>
              <p>Progress: <strong>{application.progress}%</strong></p>

              {/* Buttons to update status */}
              <button onClick={() => updateStatus(application.id, "Approved", 100)}>
                Approve Application
              </button>
              <button onClick={() => updateStatus(application.id, "Rejected", 0)}>
                Reject Application
              </button>
              <button onClick={() => updateStatus(application.id, "Pending", 40)}>
                Reset to Pending
              </button>
            </div>
          ))
        ) : (
          <p>No application status available.</p>
        )}
      </div>
    </div>
  );
};

export default Status;
