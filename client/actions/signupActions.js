import axios from 'axios';

export const userSignupRequest = userData => dispatch =>
  axios.post('/api/users', userData);

// export const userSignupRequest = userData => dispatch =>
//   fetch(
//     '/api/users',
//     {
//       method: 'post',
//       body: JSON.stringify(userData)
//     });