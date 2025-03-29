import React from "react";
import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const navigate = useNavigate();
  return (
    <main style={{ backgroundColor: "#f0f4f8", minHeight: "100vh" }}>
      <div className="container py-4">
        <div
          className="p-5 mb-4 bg-light rounded-3"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "3rem",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="container-fluid py-5">
            <h1
              className="display-4 fw-bold"
              style={{ color: "#2c3e50", fontFamily: "Arial, sans-serif" }}
            >
              OOSE Mini Project
            </h1>
            <p
              className="col-md-8 fs-5"
              style={{ color: "#7f8c8d", fontFamily: "Arial, sans-serif" }}
            >
              I am working on the OOSE Mini project as part of my coursework.
              This project focuses on applying Object-Oriented Software
              Engineering principles. It involves designing, developing, and
              implementing a structured software solution.
            </p>
          </div>
        </div>

        <div
          className="row align-items-md-stretch"
          style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}
        >
          <div className="col-md-5 mb-4">
            <div
              className="h-100 p-5 text-white bg-primary rounded-4"
              style={{
                borderRadius: "18px",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2 className="display-5 fw-bold">As a Student</h2>
              <p className="col-md-8 fs-4">
                Students can enroll in courses they like and view them.
              </p>
              <button
                className="btn btn-outline-light"
                type="button"
                onClick={() => {
                  navigate("/login");
                }}
                style={{
                  backgroundColor: "#1e7e34",
                  borderColor: "#1e7e34",
                  color: "#fff",
                  padding: "12px 25px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  transition: "background-color 0.3s ease, transform 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}

              >
                Login or Register Now
              </button>
            </div>
          </div>

          <div className="col-md-5 mb-4">
            <div
              className="h-100 p-5 bg-secondary text-white rounded-4"
              style={{
                borderRadius: "18px",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2 className="display-5 fw-bold">As an Instructor</h2>
              <p className="col-md-8 fs-4">
                Instructors can add new courses and delete existing courses.
              </p>
              <button
                className="btn btn-outline-light"
                type="button"
                onClick={() => {
                  navigate("/login");
                }}
                style={{
                  backgroundColor: "#e67e22",
                  borderColor: "#e67e22",
                  color: "#fff",
                  padding: "12px 25px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  transition: "background-color 0.3s ease, transform 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                Login or Register Now
              </button>
            </div>
          </div>
        </div>

        <footer
          className="pt-3 mt-4 text-muted border-top"
          style={{
            textAlign: "center",
            fontSize: "16px",
            padding: "15px",
            color: "#7f8c8d",
            fontFamily: "Arial, sans-serif",
            borderTop: "2px solid #e9ecef",
          }}
        >
          &copy; 2025 @OOSE PROJECT
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
