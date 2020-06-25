import axios from 'axios';

export function getBooks(limit = 10, start = 0, order = 'asc', list = '') {
  // const request = `/api/getBooks?limit=${limit}&skip=${start}&order=${order}`;
  const request = axios
    .get(`/api/getBooks?limit=${limit}&skip=${start}&order=${order}`)
    .then((response) => {
      if (list) {
        return [...list, ...response.data];
      } else {
        return response.data;
      }
    });
  return {
    type: 'GetBooks',
    payload: request,
  };
}

export function getBook(id) {
  const request = axios.get(`/api/getBook?id=${id}`);
  return (dispatch) => {
    request.then(({ data }) => {
      let book = data;
      axios.get(`/api/getReviewer?id=${book.ownerId}`).then(({ data }) => {
        let response = {
          book,
          reviewer: data,
        };
        dispatch({
          type: 'GetBook',
          payload: response,
        });
      });
    });
  };
}
export function userLogin({ email, password }) {
  const request = axios
    .post('/api/login/', { email, password })
    .then((response) => {
      return response.data;
    });

  return {
    type: 'getUser',
    payload: request,
  };
}

export function isAuth() {

  const request = axios.get('/api/auth')
    .then(response => {
      return response.data;  
    })
  
  return {
    type: "isAuth",
    payload:request
  }
}
// export function getBook(id) {
//   const request = axios.get(`/api/getBook?id=${id}`);

//   return (dispatch) => {
//     request.then(({ data }) => {
//       let book = data;

//       axios.get(`/api/getReviewer?id=${book.ownerId}`).then(({ data }) => {
//         let response = {
//           book,
//           reviewer: data,
//         };
//         console.log(response);
//         dispatch({
//           type: 'GetBook',
//           payload: response,
//         });
//       });
//     })
//   }
// }
