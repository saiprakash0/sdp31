import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import ResetPassword from "./components/Auth/ResetPassword";
import Register from "./components/Auth/Register";
import AdminPage from "./components/Admin/AdminPage";
import UserPage from "./components/User/UserPage";
import UserProfile from "./components/User/UserProfile";
import ApplyScholarship from "./components/User/ApplyScholarship";
import Status from "./components/User/Status";
import Home from "./components/Home";
import ScholarshipApplicationForm from "./components/User/ScholarshipApplicationForm";  // Import the ScholarshipApplicationForm component
import ExploreMorePage from "./components/User/ExploreMorePage";
import SupportAndResources from './components/User/SupportAndResources';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />  {/* Home route */}
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin-page" element={<AdminPage />} />
      <Route path="/user-page" element={<UserPage />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/apply-scholarship" element={<ApplyScholarship />} />
      <Route path="/status" element={<Status />} />
      <Route path="/explore-more" element={<ExploreMorePage />} />
      <Route path="/apply-scholarship/:scholarshipId" element={<ScholarshipApplicationForm />} />
      <Route path="/support-and-resources" element={<SupportAndResources />} /> {/* Add Support and Resources route */}
    </Routes>
  );
};

export default App;
