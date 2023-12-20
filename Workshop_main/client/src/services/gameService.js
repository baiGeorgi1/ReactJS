import * as request from "../library/request"; //import request builder

const URL = "http://localhost:3030/data/games";

export const getAll = async () => {
  const result = await request.get(URL);

  return result;
};
export const getLatest = async () => {
  const query = new URLSearchParams({
    sortBy: `_createdOn des`,
    //Paggination
    offset: 0,
    pageSize: 3,

  });
  const sorted = new URLSearchParams({

  });

  const result = await request.get(`${URL}?${query}`);
  return result;
};

export const getOne = async (gameId) => {
  const result = await request.get(`${URL}/${gameId}`);
  return result;
};
export const edit = async (gameId, newData) => {

  const result = await request.put(`${URL}/${gameId}`, newData);
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

export const delGame = async (gameId) => {
  await request.del(`${URL}/${gameId}`);
};
