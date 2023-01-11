import { API_URL } from "../constants/apiUrl";
import Axios from "axios";

export async function AddUser(data) {
  console.log(data);
  const result = await Axios.post(`${API_URL}add-user`, {
    name: data.name,
    lastname: data.lastname,
    email: data.email,
    password: data.password,
    organization: data.organization,
  });

  return result.data;
}

export async function UserLogin(data) {
  const result = await Axios.post(`${API_URL}login`, {
    email: data.email,
    password: data.password,
  });

  return result.data;
}

export async function GetUserById(id) {
  const result = await Axios.get(`${API_URL}user/${id}`);

  return result.data[0];
}
