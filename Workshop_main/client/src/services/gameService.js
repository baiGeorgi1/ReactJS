import * as request from "../library/request"; //import request builder

const URL = "http://localhost:3030/data/games";

export const getAll = async () => {
  const result = await request.get(URL);

  return result;
};

export const getOne = async (gameId) => {
  const result = await request.get(`${URL}/${gameId}`);
  return result;
};

// без Build option in reuester
// export const createGame = async (data) => {
//   const response = await fetch(`${URL}`, {
//     method: "post",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//    result = await response.json();
//   return result;
// };

//Using build option

export const createGame = async (data) => {
  const result = await request.post(URL, data);
  return result;
};
