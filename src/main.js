import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Translations provided by Vuetify
import { pl, zhHans } from 'vuetify/locale'

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
    locale: {
        defaultLocale: 'zhHans',
        fallbackLocale: 'sv',
        messages: { zhHans, pl }
    },
}) // Replaces new Vuetify(...)

app.use(vuetify)

app.mount('#app')