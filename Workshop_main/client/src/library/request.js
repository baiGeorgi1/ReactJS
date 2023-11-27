// В buildOption изнасяме част от функ-ста по създ. на опшъните
const buildOption = (data) => {
  const options = {};
  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      "content-type": "aplication/json",
    };
  }
  const token = localStorage.getItem("accessToken");

  if (token) {
    options.headers = {
      ...options.headers,
      "X-Authorization": token,
    };
  }
  return options;
};

const request = async (method, url, data) => {
  const response = await fetch(url, {
    ...buildOption(data),
    method,
  });
  // for logout
  if (response.status === 204) {
    return {};
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }
  return result;
};
// called partial application
export const get = request.bind("nul", "get");
export const post = request.bind("nul", "post");
export const put = request.bind("nul", "put");
export const del = request.bind("nul", "delete");
