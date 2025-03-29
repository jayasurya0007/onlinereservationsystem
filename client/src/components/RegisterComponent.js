import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const RegisterComponent = () => {
  const navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");
  let [message, setMessage] = useState("");

  const handleusername = function (e) {
    setUsername(e.target.value);
  };
  const handleemail = function (e) {
    setEmail(e.target.value);
  };
  const handlepassword = function (e) {
    setPassword(e.target.value);
  };
  const handlerole = function (e) {
    setRole(e.target.value);
  };

  const handleresgister = function () {
    AuthService.register(username, email, password, role)
      .then(() => {
        window.alert(
          "Register successfully. Redirecting you to the login page"
        );
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  return (
    <div
      style={{
        padding: "3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
      }}
      className="col-md-12"
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {message && (
          <div
            style={{
              backgroundColor: "#f8d7da",
              color: "#721c24",
              padding: "10px",
              borderRadius: "4px",
              marginBottom: "15px",
            }}
            className="alert alert-danger"
            role="alert"
          >
            {message}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="username" style={{ fontWeight: "600", marginBottom: "8px" }}>
            Username
          </label>
          <input
            onChange={handleusername}
            type="text"
            className="form-control"
            name="username"
            style={{
              borderRadius: "5px",
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "15px",
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="email" style={{ fontWeight: "600", marginBottom: "8px" }}>
            Email
          </label>
          <input
            onChange={handleemail}
            type="text"
            className="form-control"
            name="email"
            style={{
              borderRadius: "5px",
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "15px",
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password" style={{ fontWeight: "600", marginBottom: "8px" }}>
            Password
          </label>
          <input
            onChange={handlepassword}
            type="password"
            className="form-control"
            name="password"
            style={{
              borderRadius: "5px",
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "15px",
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="role" style={{ fontWeight: "600", marginBottom: "8px" }}>
            Role
          </label>
          <input
            onChange={handlerole}
            type="text"
            className="form-control"
            name="role"
            style={{
              borderRadius: "5px",
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "20px",
            }}
          />
        </div>
        <br />
        <button
          onClick={handleresgister}
          className="btn btn-primary btn-block"
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          <span>Register</span>
        </button>
      </div>
    </div>
  );
};

export default RegisterComponent;
