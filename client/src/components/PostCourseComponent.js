import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";
import './PostCourseComponent.css'; // Import the external CSS file

const PostCourseComponent = (props) => {
  let navigate = useNavigate();
  let { currentUser, setCurrentUser } = props;
  let [title, setTitle] = useState("");
  let [description, setDiscription] = useState("");
  let [price, setPrice] = useState(0);
  let [message, setMessage] = useState("");
  const handlelogin = function () {
    navigate("/login");
  };
  const handletitle = function (e) {
    setTitle(e.target.value);
  };
  const handledescription = function (e) {
    setDiscription(e.target.value);
  };
  const handleprice = function (e) {
    setPrice(e.target.value);
  };
  const handlecourse = function () {
    CourseService.post(title, description, price)
      .then(() => {
        alert("Course has been successfully created");
        navigate("/course");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  return (
    <div className="post-course-container">
      {!currentUser && (
        <div className="message-section">
          <h1>You must login before accessing this page</h1>
          <button className="login-button" onClick={handlelogin}>
            Click button to login
          </button>
        </div>
      )}

      {currentUser && currentUser.user.role !== "instructor" && (
        <div className="access-restricted">
          <h1>Only instructors can post new courses</h1>
          <button className="login-button" onClick={handlelogin}>
            Click button to change account
          </button>
        </div>
      )}

      {currentUser && currentUser.user.role === "instructor" && (
        <div>
          <div className="form-group">
            <label htmlFor="inputtitle">Title</label>
            <input
              name="title"
              id="inputitle"
              className="form-control"
              type="text"
              onChange={handletitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputdescription">Description</label>
            <input
              name="description"
              id="inputdescription"
              className="form-control"
              type="text"
              onChange={handledescription}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputprice">Price</label>
            <input
              name="price"
              id="inputprice"
              className="form-control"
              type="number"
              onChange={handleprice}
            />
          </div>
          <button onClick={handlecourse}>Submit Course</button>
          {message && <div className="alert-warning">{message}</div>}
        </div>
      )}
    </div>
  );
};

export default PostCourseComponent;
