const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
};

const json = (response) => response.json();

export function request({ url, method, body }) {
  const init = {
    method,
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  };

  return new Promise((resolve) => {
    fetch(url, init)
      .then(status)
      .then(json)
      .then((data) => resolve(data));
  });
}

export const get = (requestUrl, id = null, params = {}) =>
  request({
    url: id ? `${requestUrl}/${id}` : requestUrl,
    method: 'get',
    params,
  });
