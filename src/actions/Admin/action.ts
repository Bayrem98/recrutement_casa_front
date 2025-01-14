import axios from "axios";
import Admin from "../../@types/Admin";

export function getAdmins(callback: (data: Admin[]) => void) {
  axios
    .get(`${process.env.REACT_APP_API_URL}/admin`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getAdmin(id: string, callback: (data: Admin) => void) {
  axios
    .get(`${process.env.REACT_APP_API_URL}/admin/` + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function addAdmin(admin: Admin, callback: () => void) {
  axios
    .post(`${process.env.REACT_APP_API_URL}/admin`, admin)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function editAdmin(admin: Admin, callback: () => void) {
  axios
    .put(`${process.env.REACT_APP_API_URL}/admin/${admin._id}`, admin)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function deleteAdmin(admin: Admin, callback: () => void) {
  axios
    .delete(`${process.env.REACT_APP_API_URL}/admin/${admin._id}`)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}
