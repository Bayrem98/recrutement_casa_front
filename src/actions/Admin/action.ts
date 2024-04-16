import axios from "axios";
import Admin from "../../@types/Admin";

export function getAdmins(callback: (data: Admin[]) => void) {
  axios
    .get(`http://localhost:3001/admin`, {
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
    .get(`http://localhost:3001/admin/` + id, {
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
    .post(`http://localhost:3001/admin`, admin)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function editAdmin(admin: Admin, callback: () => void) {
  axios
    .put(`http://localhost:3001/admin/${admin._id}`, admin)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function deleteAdmin(admin: Admin, callback: () => void) {
  axios
    .delete(`http://localhost:3001/admin/${admin._id}`)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}
