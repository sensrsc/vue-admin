import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { setCookie } from '../utils/cookie';
import { apiLogin, apiLoadProjects, apiCreateProject } from '../utils/api';

export default new Vuex.Store({
  state: {
    isLogin: false,
    projects: []
  },
  mutations: {
    setLoginStatus(state, isLogin) {
      state.isLogin = isLogin;
    },
    setProjects(state, projects) {
      state.projects = projects;
    }
  },
  getters: {
    projects: state => state.projects
  },
  actions: {
    handleLogin({ commit, state }, { username, password }) {
      return new Promise((resolve, reject) => {
        apiLogin(username, password)
          .then(response => {
            commit('setLoginStatus', true);
            setCookie(true);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    loadProjects({ commit }) {
      return new Promise((resolve, reject) => {
        apiLoadProjects()
          .then(response => {
            commit('setProjects', response.data);
            resolve();
          })
          .catch(error => {
            console.log(error);
          });
      });
    },
    createProject({ commit, state }, { name }) {
      return new Promise((resolve, reject) => {
        apiCreateProject(name)
          .then(response => {
            resolve();
          })
          .catch(error => {
            console.log(error);
          });
      });
    }
  },
  modules: {}
});
