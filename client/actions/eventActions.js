import axios from 'axios';

export const createEvent = event => dispatch =>
  axios.post('/api/events', event);
