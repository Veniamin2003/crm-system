// @ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: false},
    modules: [
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    Lato: {
                        wght: [300, 499, 700],
                        ital: [300],
                    },
                },
            },
        ],
        'nuxt-icon',
        '@pinia/nuxt',
    ],
    shadcn: {
        prefix: 'Ui',
        componentDir: './components/ui',
    },
    pinia: {
        storesDirs: ['./store/**'],
    },

})