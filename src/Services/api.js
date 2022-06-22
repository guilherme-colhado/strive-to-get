import axios from "axios";

export const BaseApi = axios.create({
  baseURL: "https://kenzie-habits.herokuapp.com/",
});
