import { createApp } from 'vue'
import App from './App.vue'
import wxsdk from './wxsdk/index.ts'

createApp(App).use(wxsdk).mount('#app')
