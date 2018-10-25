import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { setCookie } from '../utils/cookie';
import { login } from '../utils/api';

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    setLoginStatus(state, isLogin) {
      state.isLogin = isLogin;
    }
  },
  getter: {},
  actions: {
    handleLogin({ commit, state }, { username, password }) {
      return new Promise((resolve, reject) => {
        login(username, password)
          .then(response => {
            commit('setLoginStatus', true);
            setCookie(true);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },
  modules: {}
});
