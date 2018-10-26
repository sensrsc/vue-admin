import config from '../config';

export const apiLogin = ({ username, password }) => {
  return window.axios.post(config.apiUrl.concat('/api/login'), username, password);
};

export const apiLoadProjects = () => {
  return window.axios.get(config.apiUrl.concat('/api/project'));
};

export const apiCreateProject = (name) => {
  return window.axios.post(config.apiUrl.concat('/api/project'), { project_name: name });
};
