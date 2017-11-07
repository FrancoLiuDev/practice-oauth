/*import {
    HAS_SES,
    LOGIN,
    LOGOUT,
    LOGIN_REP,
    CLEAR_LOGIN_ERROR,
} from 'types';*/

export default {
  state: {
    //登入狀態 0未檢查 1登入檢查中 2已登入 3未登入 4登入中 5登入失敗 -1服務器失敗
    //6登出中
    adminStep: 0,
    loginResponse: null //登入回傳值
  },
  getters: {
    isLogin: state => {
      return false;
    }
  },
  mutations: {
    changeAdminStep(state, payload) {}
  },
  actions: {}
};
