import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const LoginComponent = (props) => {
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");
  let { currentUser, setCurrentUser } = props;

  const handleemail = function (e) {
    setEmail(e.target.value);
  };
  const handlepassword = function (e) {
    setPassword(e.target.value);
  };
  const handlelogin = function () {
    AuthService.login(email, password)
      .then(async (res) => {
        if (res.data.success) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }
        setCurrentUser(AuthService.getCurrentUser());
        window.alert("Successfully login");
        navigate("/profile");
      })
      .catch((error) => {
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
              marginBottom: "20px",
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <button
            className="btn btn-primary btn-block"
            onClick={handlelogin}
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
            <span>Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
