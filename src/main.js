import Vue from 'vue'
import App from './App.vue'
import { KendoColorPicker } from '@progress/kendo-inputs-vue-wrapper'
import '@progress/kendo-theme-default/dist/all.css'
import '@progress/kendo-ui'

Vue.component(KendoColorPicker.name, KendoColorPicker)

new Vue({
  el: '#app',
  render: h => h(App),
  components: {
    KendoColorPicker
  }
})
