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
        // window.axios.post('http://127.0.0.1:8001/api/login', username, password)
        //   .then(response => {
        //     commit('setLoginStatus', true);
        //     setCookie(true);
        //     resolve();
        //   })
        //   .catch(error => {
        //     reject(error);
        //   });
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
