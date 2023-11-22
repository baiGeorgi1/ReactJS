import * as request from "../library/request";

const URL = "http://localhost:3030/jsonstore/comments";

export const getAll = async (gameId) => {
  const result = await request.get(`${URL}`);
  console.log(Object.values(result));

  //TODO temp solution until do authentication
  return Object.values(result).filter((comment) => comment.gameId === gameId);
};

export const create = async (gameId, username, text) => {
  const result = await request.post(URL, {
    gameId,
    username,
    text,
  });
  return result;
};
