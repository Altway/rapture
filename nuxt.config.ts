// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            script: [{
                src: 'https://accounts.google.com/gsi/client', 
            }],
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        googleClientId: '',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api',
        }
    }
})

