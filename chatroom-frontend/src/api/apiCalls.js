import axios from "axios";

export const signup = (user) => {
  return axios.post("/api/users", user);
};
