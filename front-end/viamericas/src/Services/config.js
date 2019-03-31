import axios from 'axios';

const BASE_URL = "https://v45hh4g3q5.execute-api.us-east-1.amazonaws.com/";

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;