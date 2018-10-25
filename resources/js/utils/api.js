import config from '../config';

export const login = ({ username, password }) => {
  return window.axios.post(config.apiUrl.concat('/api/login'), username, password);
};
