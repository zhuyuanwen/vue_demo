import api from '../api'
import * as types from './types'

export const showMsg = ({commit}, content, type = 'error') => {
  commit(types.SHOW_MSG, {content: content, type: type})
};

export const hideMsg = ({commit}) => {
  commit(types.HIDE_MSG)
};

export const UserLogin = (store, data) => {
  if (!data.username) {
    showMsg(store, '请输入用户名', 'error')
  } else if (!data.password) {
    showMsg(store, '请输入密码', 'error')
  } else {
    api.localLogin(data).then(function (response) {
      console.log(response);
      if (response.data.status === "success") {
        store.commit(types.USER_SIGNIN, response.data.token);
        window.location = '/home'
      } else {
        showMsg(store, '用户名或密码错误', 'error');
      }
    })
      .catch(function (error) {
        showMsg(store, error, 'error');
        console.log(error);
      });
  }

};

export const UserLogout = ({commit}, data) => {
  api.localLogout(data).then(function (response) {
    commit(types.USER_SIGNOUT);
    window.location = '/login'
  })
    .catch(function (error) {
      console.log(error);
    });
};

export const UserReg = (store, data) => {
  console.log(data);
  let pattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/; // 验证邮箱RegExp
  if (!data.username) {
    showMsg(store, '请输入用户名', 'error');
  }
  else if (!data.email) {
    showMsg(store, '请输入邮箱', 'error');
  } else if (!data.password) {
    showMsg(store, '请输入密码', 'error');
  } else if (!data.verify) {
    showMsg(store, '请输入验证码', 'error');
  } else if (!pattern.test(data.email)) {
    showMsg(store, '请输入正确的邮箱', 'error');
  } else {
    api.localReg(data).then(function (response) {
      console.log(response);
      console.log(data);
      if (response.data.status === "success") {
        store.commit(types.USER_REG, response.data.token);
        window.location = '/home'
      } else {
        showMsg(store, response.data.error, 'error');
      }
    })
      .catch(function (error) {
        console.log(error);
      });
  }
};
