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

  return new Promise((resolve, reject) => {
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

export const post = (requestUrl, payload = {}) =>
  request({
    url: requestUrl,
    method: 'post',
    body: payload,
  });

export const patch = (requestUrl, payload = {}) =>
  request({
    url: requestUrl,
    method: 'put',
    body: payload,
  });

export const put = (requestUrl, id, payload = {}) =>
  request({
    url: `${requestUrl}/${id}`,
    method: 'put',
    body: payload,
  });

export const remove = (requestUrl, id) =>
  request({
    url: `${requestUrl}/${id}`,
    method: 'delete',
    id,
  });
