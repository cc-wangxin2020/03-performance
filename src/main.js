import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import directives from './directives'
import globalProperties from './globalProperties'

createApp(App)
  .use(directives)
  .use(globalProperties)
  .use(store)
  .use(router)
  .mount('#app')
