import Axios from "axios-observable";

const api = Axios.create({ baseURL: "http://localhost:5000/" });

api.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default api;

export const EndPoints = {
  heroes: "heroes",
  antiHeroes: "anti-heroes",
  villains: "villains",
};
