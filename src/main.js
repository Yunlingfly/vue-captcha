// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VECharts from 'vue-echarts' // refers to components/ECharts.vue in webpack
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// import ECharts modules manually to reduce bundle size
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

// If you want to use ECharts extensions, just import the extension package, and it will work
// Taking ECharts-GL as an example:
// You only need to install the package with `npm install --save echarts-gl` and import it as follows
import 'echarts-gl'

// register component to use
Vue.component('v-chart', VECharts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
