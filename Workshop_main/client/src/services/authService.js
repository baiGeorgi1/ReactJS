import * as request from "../library/request";

const URL = "http://localhost:3030/users";

export const login = async (email, password) => {
  const result = await request.post(`${URL}/login`, {
    email,
    password,
  });
  return result;
};