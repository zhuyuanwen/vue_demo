import Vue from 'Vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

let instance = axios.create();
if (localStorage.getItem('user')) {
  instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user').replace(/(^\")|(\"$)/g, '');
}

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = window.jQuery.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(
  config => {
    config.withCredentials = true; // cors fetch cookie
    config.headers.common['X-CSRFToken'] = getCookie('csrftoken');
    console.log(config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default {
  localLogin: function (data) {
    return Vue.axios.post(domain.loginUrl, data)
  },
  localLogout: function (data) {
    return instance.post(domain.logoutUrl, data)
  },
  localReg: function (data) {
    return Vue.axios.post(domain.registerUrl, data)
  },
  localGetToken: function () {
    return Vue.axios.get(domain.getToken)
  }
}
