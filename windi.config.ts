import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    darkMode: 'class', // or 'media'
    extract: {
        include: [
            'src/**/*.{vue,jsx,tsx,svelte}',
            'shared/**/*.{vue,ts}',
        ],
    }
})