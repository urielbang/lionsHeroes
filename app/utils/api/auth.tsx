import axios from "axios";
import { APIBaseUrl } from "../../config";

export const createUser = async (email, password, name) => {
  try {
    const res = await axios.post(`${APIBaseUrl}users/register`, {
      email: email,
      password: password,
      name: name,
    });
    const data = await res.data;
    const token = data.token;
    return token;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(`${APIBaseUrl}users/login`, {
      email: email,
      password: password,
    });

    const data = await res.data;
    const token = data.token;

    return token;
  } catch (error) {
    console.log(error);
  }
};
