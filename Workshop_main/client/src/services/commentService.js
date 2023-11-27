import * as request from "../library/request";

const URL = "http://localhost:3030/data/comments";

export const getAll = async (gameId) => {
  const query = new URLSearchParams({
    where: `gameId="${gameId}"`,
  });

  const result = await request.get(`${URL}?${query}`);

  return result;
};

export const create = async (gameId, username, text) => {
  const result = await request.post(URL, {
    gameId,
    username,
    text,
  });
  return result;
};
