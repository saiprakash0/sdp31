import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for navigation
// import "./UserProfile.css"; // Ensure this file exists and is styled properly

const UserProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState(""); // New field for address
    const [bio, setBio] = useState(""); // New field for bio
    const [profileImage, setProfileImage] = useState(null);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(false); // Track update success
    const token = localStorage.getItem("token"); // Assuming JWT token is stored in localStorage

    // Fetch user profile data when the component loads
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data) {
                    const { name, email, phone, address, bio, profileImage } = response.data;
                    setName(name);
                    setEmail(email);
                    setPhone(phone);
                    setAddress(address); // Set the address
                    setBio(bio); // Set the bio
                    setProfileImage(profileImage);
                }
            } catch (err) {
                setError("Error fetching profile data.");
            }
        };

        fetchUserProfile();
    }, [token]);

    // Handle profile update form submission
    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        setMessage(""); // Clear previous message
        setError(""); // Clear previous error

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("address", address); // Include address in form data
        formData.append("bio", bio); // Include bio in form data
        if (profileImage) {
            formData.append("profileImage", profileImage); // Append the image if selected
        }

        try {
            const response = await axios.put("http://localhost:8080/api/profile/update", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data) {
                setMessage("Profile updated successfully.");
                setIsUpdateSuccessful(true);
            }
        } catch (err) {
            if (err.response) {
                setError(err.response.data); // Handle backend error
            } else {
                setError("Something went wrong. Please try again.");
            }
        }
    };

    // Handle file input change (for profile image upload)
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file);
        }
    };

    return (
        <div className="user-profile-container">
            <h2>Update Your Profile</h2>

            {/* Form for updating user profile */}
            <form onSubmit={handleProfileUpdate} className="profile-form">
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Enter your phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows="3"
                />
                <textarea
                    placeholder="Enter a short bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows="4"
                />

                {/* Profile image upload */}
                <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                />

                <button type="submit" className="update-profile-button">
                    Update Profile
                </button>
            </form>

            {/* Display success or error messages */}
            {message && <div className="message success">{message}</div>}
            {error && <div className="message error">{error}</div>}

            {/* Provide a logout or return link */}
            {isUpdateSuccessful && (
                <div className="login-link">
                    <p>Your profile has been updated successfully!</p>
                    <Link to="/profile">View Profile</Link>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
