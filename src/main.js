import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import {
 faSquare

} from "@fortawesome/free-solid-svg-icons"
import {
    faInstagram,
    faSquareInstagram,
 faSquareWhatsapp

} from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
    faSquareWhatsapp,
    faSquareInstagram,
    faInstagram,

);

createApp(App).use(createPinia()).component("font-awesome-icon", FontAwesomeIcon).use(router).mount('#app')
