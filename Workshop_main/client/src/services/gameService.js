import { request } from "../library/request";

const URL = "http://localhost:3030/jsonstore/games";

export const getAll = async () => {
  const result = await request("get", URL);

  return Object.values(result);
};

export const createGame = async (data) => {
  const response = await fetch(`${URL}`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};
