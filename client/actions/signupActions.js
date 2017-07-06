import axios from 'axios';

export const userSignupRequest = userData => dispatch =>
  axios.post('/api/users', userData);

export const isUserExists = id => dispatch =>
  axios.get(`/api/users/${id}`);