// temporary
/* eslint-disable */

const API = 'https://api.hackillinois.org';

function request(method, endpoint, body) {
  return fetch(API + endpoint, {
    method,
    headers: {
      Authorization: sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw Error(res);
  });
}

export function getToken(code) {
  return request('POST', '/auth/code/github/', { code })
    .then((res) => res.token);
}
