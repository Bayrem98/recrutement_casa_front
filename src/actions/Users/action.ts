import axios from "axios";
import Users from "../../@types/Users";

export function getUsers(callback: (data: Users[]) => void) {
  axios
    .get(`http://localhost:3001/users`, {
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

export function getUser(id: string, callback: (data: Users) => void) {
  axios
    .get(`http://localhost:3001/users/` + id, {
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

export function addUser(users: Users, callback: () => void) {
  axios
    .post(`http://localhost:3001/users`, users)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function editUser(users: Users, callback: () => void) {
  axios
    .put(`http://localhost:3001/users/${users._id}`, users)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function deleteUser(users: Users, callback: () => void) {
  axios
    .delete(`http://localhost:3001/users/${users._id}`)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}
