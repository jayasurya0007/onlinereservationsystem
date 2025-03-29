import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileComponent = (props) => {
  const navigate = useNavigate();
  let { currentUser, setCurrentUser } = props;

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
      window.alert("Please login first!");
    }
  }, [currentUser, navigate]);

  return (
    <div
      style={{
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      {currentUser && (
        <div
          className="container"
          style={{
            maxWidth: "700px",
            margin: "auto",
            padding: "2rem",
            backgroundColor: "#fff",
            borderRadius: "15px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#2c3e50",
              fontFamily: "Arial, sans-serif",
              marginBottom: "2rem",
            }}
          >
            Your Profile
          </h1>
          <header className="jumbotron" style={{ marginBottom: "1.5rem" }}>
            <h3
              style={{
                textAlign: "center",
                fontSize: "1.8rem",
                color: "#2c3e50",
                marginBottom: "1rem",
              }}
            >
              <strong>{currentUser.user.username}</strong>
            </h3>
            <p
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                color: "#7f8c8d",
                marginBottom: "1rem",
              }}
            >
              <strong>Email:</strong> {currentUser.user.email}
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                color: "#7f8c8d",
              }}
            >
              <strong>Role:</strong> {currentUser.user.role}
            </p>
          </header>

          <div
            style={{
              textAlign: "center",
              marginTop: "2rem",
            }}
          >
            <button
              onClick={() => {
                // This could be a feature like editing the profile
                alert("Profile edit functionality coming soon!");
              }}
              style={{
                backgroundColor: "#3498db",
                border: "none",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "30px",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background-color 0.3s ease, transform 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
