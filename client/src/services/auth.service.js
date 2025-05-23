import axios from "axios";
const API_URL = "https://onlinereservationsystem.onrender.com/api/user";

const AuthService = {
  login(email, password) {
    return axios.post(API_URL + "/login", {
      email,
      password,
    });
  },
  logout() {
    localStorage.removeItem("user");
  },
  register(username, email, password, role) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
      role,
    });
  },
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
};

export default AuthService;
