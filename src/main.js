import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import directives from './directives'
import globalProperties from './globalProperties'
import svgIcon from '@/icon'

createApp(App)
  .use(directives)
  .use(globalProperties)
  .use(svgIcon)
  .use(store)
  .use(router)
  .mount('#app')
