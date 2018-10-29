import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { setCookie } from '../utils/cookie';
import { apiLogin, apiLoadProjects, apiCreateProject } from '../utils/api';

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: [],
    projects: []
  },
  mutations: {
    setLoginStatus(state, isLogin) {
      state.isLogin = isLogin;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProjects(state, projects) {
      state.projects = projects;
    }
  },
  getters: {
    projects: state => state.projects
  },
  actions: {
    handleLogin({ commit, state }, { email, password }) {
      return new Promise((resolve, reject) => {
        apiLogin(email, password)
          .then(response => {
            commit('setLoginStatus', true);
            commit('setUser', response.data);
            setCookie(response.data);
            resolve();
          })
          .catch(error => {
            console.log(error);
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
            commit('setProjects', response.data);
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
