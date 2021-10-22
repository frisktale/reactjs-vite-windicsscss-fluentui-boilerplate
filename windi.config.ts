import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            colors: {
                gray: colors.coolGray,
                blue: colors.sky,
                red: colors.rose,
                pink: colors.fuchsia,
            },
        }
    },
    extract: {
        include: [
            'src/**/*.{vue,jsx,tsx,svelte}',
            'shared/**/*.{vue,ts}',
        ],
    }
})