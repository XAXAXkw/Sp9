import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'


import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyDRuPMew7u6TzcM_kaPUzJIOC3WeG3S0cA",
    authDomain: "xaxaxdata.firebaseapp.com",
    projectId: "xaxaxdata",
    storageBucket: "xaxaxdata.appspot.com",
    messagingSenderId: "384753759857",
    appId: "1:384753759857:web:f450f30583dc9c2b838dd0",
    measurementId: "G-TKW9VK8908"
  };





initializeApp(firebaseConfig);



import "./assets/main.css"
const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')


