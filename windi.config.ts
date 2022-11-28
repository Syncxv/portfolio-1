import { defineConfig } from 'windicss/helpers';

export default defineConfig({
    /* configurations... */
    content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-black': '#0e0e0e',
                brand: 'var(--brand)',
            },
        },
    },
});
