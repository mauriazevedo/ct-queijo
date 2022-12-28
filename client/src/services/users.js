import { API_URL } from "../constants/apiUrl";
import Axios from "axios";

export async function AddUser(data) {
  console.log(data);
  await Axios.post(`${API_URL}add-user`, {
    name: data.name,
    lastname: data.lastname,
    email: data.email,
    password: data.password,
    organization: data.organization,
  })
    .then((response) => ("deu bom", response))
    .catch((error) => ("Deu ruim", error));
}
