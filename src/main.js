import Vue from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.config.productionTip = false

Vue.use(elementUi, locale)

const filter = function (text, length, clamp) {
  clamp = clamp || '...';
  let node = document.createElement('div');
  node.innerHTML = text;
  let content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);

new Vue({
  render: h => h(App),
}).$mount('#app')
