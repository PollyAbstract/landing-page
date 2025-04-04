import type {Config} from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'tt-trailers': ['var(--font-tt-trailers)'],
                'fobble': ['var(--font-fobble)'],
            },
            colors: {
                'typography-inverse': 'var(--typography-inverse)',
                'primary': 'var(--primary)',
            },
        },
    },
    plugins: [],
};

export default config;