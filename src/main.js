import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TagsInput from './components/Tagsinput.vue'



const app =createApp(App)
app.component('tags-input', TagsInput)
app.mount('#app')
