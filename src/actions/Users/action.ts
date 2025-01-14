import axios from "axios";
import Users from "../../@types/Users";

export function getUsers(
  query: { nom?: string; status: { status: string; color: string } } | null,
  callback: (data: Users[]) => void
) {
  axios
    .get(`${process.env.REACT_APP_API_URL}/users`, {
      params: query,
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
    .get(`${process.env.REACT_APP_API_URL}/users/` + id, {
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
    .post(`${process.env.REACT_APP_API_URL}/users`, users)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function editUser(users: Users, callback: () => void) {
  axios
    .put(`${process.env.REACT_APP_API_URL}/users/${users._id}`, users)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function deleteUser(users: Users, callback: () => void) {
  axios
    .delete(`${process.env.REACT_APP_API_URL}/users/${users._id}`)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error(error);
    });
}
