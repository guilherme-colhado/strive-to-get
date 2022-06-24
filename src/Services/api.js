import axios from "axios";

export const Api = axios.create({baseURL: 'https://kenzie-habits.herokuapp.com/'})