import tokenService from './tokenService';

const BASE_URL = '/api/paints';

export function index() {
  console.log(tokenService.getToken());
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
};

export function create(paint) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(paint)
  };
  return fetch(BASE_URL, options).then(res => res.json());
};

export function deleteOne(id) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
  };
  return fetch(`${BASE_URL}/${id}`, options).then(res => res.json());
};

export function update(paint, idx) {
  return fetch(`${BASE_URL}/${idx}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(paint)
  }, {mode: "cors"}).then(res => res.json());
};
