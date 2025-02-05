import scrollbarHide from 'tailwind-scrollbar-hide';
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                foreground: 'rgb(var(--foreground-rgb))',
                background: 'rgb(var(--background-rgb))',
                point: 'rgb(var(--point))',
            },
        },
        backgroundImage: {
            gliter: 'var(--gliter)',
        },
        keyframes: {
            glitter: {
                '0%, 100%': { filter: 'brightness(1.2)' },
                '50%': { filter: 'brightness(2)' },
            },
        },
        animation: { glitter: 'glitter 3.5s infinite' },
    },
    plugins: [scrollbarHide],
};
export default config;
