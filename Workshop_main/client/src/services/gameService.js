const URL = "http://localhost:3030/jsonstore";

export const getAll = async () => {};

export const createGame = async (data) => {
  const response = await fetch(`${URL}/games`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};
