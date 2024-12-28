import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import VueI18n from 'vue-i18n';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import enView from 'view-design/dist/locale/en-US';
import jaView from 'view-design/dist/locale/ja-JP';

Vue.use(ViewUI);
Vue.use(VueI18n);

const messages = {
    en: {
      ...enView,
      ...require('./utils/locales/en.json')
    },
    ja: {
      ...jaView,
      ...require('./utils/locales/ja.json')
    }
  }

let language = getQueryVariable('lang');
console.log("sessionStorage打印："+language);
if (language) {
  sessionStorage.setItem('lang',language);
  console.log("urlLanguage打印："+language);
}else {
  language = sessionStorage.getItem('lang');
}
if (!language) {
    language = navigator.language.startsWith('en') ? 'en' : 'ja';
}
console.log("选择language打印："+language);
// 获取系统语言或设置默认语言
const i18n = new VueI18n({
    locale: language,
    fallbackLocale: 'ja',
    messages
});



new Vue({
    el: '#app',
    i18n,
    router,
    render: h => h(App)
});

function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split("=");
      if (pair[0] == variable) { return pair[1]; }
    }
    return false;
  }
