import config from '../config';

export const apiLogin = (email, password) => {
  return window.axios.post(config.apiUrl.concat('/api/login'), { email: email, password: password });
};

export const apiLoadProjects = () => {
  return window.axios.get(config.apiUrl.concat('/api/project'));
};

export const apiCreateProject = (name) => {
  return window.axios.post(config.apiUrl.concat('/api/project'), { project_name: name });
};
