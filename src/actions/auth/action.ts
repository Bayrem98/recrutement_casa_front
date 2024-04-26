import axios from "axios";
import Cookies from "js-cookie";

export function login(
  username: string,
  pass: string,
  callback: (data: any) => void,
  fallback: () => void
) {
  axios
    .post(`http://localhost:3001/auth/login`, {
      username: username,
      password: pass,
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((error) => {
      console.error(error);
      fallback();
    });
}

export function logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user_id");
  Cookies.remove("access_token");
  window.location.replace("/login");
}
