import * as request from "../library/request";

const URL = "http://localhost:3030/jsonstore/comments";

export const create = async (gameId, username, text) => {
  const result = await request.post(URL, {
    gameId,
    username,
    text,
  });
  return result;
};
