import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import 
{ 
    faArrowLeftLong
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/main.css'

// Add icons to library
library.add(faArrowLeftLong);

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(router)

app.mount('#app')
