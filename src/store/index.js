import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
      izp_code: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      state: "",
    },
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    getUser(context, payload) {
      api.get(`/user/${payload}`).then((resp) => {
        context.commit("UPDATE_USER", resp.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
  },
  modules: {},
});
