// src/main.js 
import './assets/main.css'; 
import { createApp } from 'vue'; 
import App from './App.vue'; 
import router from './router'; 
import animateOnScroll from './directives/animateOnScroll'; // <-- Impor 
const app = createApp(App); 
app.use(router);
app.directive('animate-on-scroll', animateOnScroll); // <-- Daftarkan app.use(router); 
app.mount('#app'); 
