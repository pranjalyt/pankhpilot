/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                brand: {
                    navy: '#0A192F', // Deep Navy
                    charcoal: '#112240', // Lighter Navy/Charcoal
                    orange: '#F97316', // Sunset Orange
                    yellow: '#EAB308', // Sunset Yellow
                    red: '#EF4444', // Sunset Red
                    accent: '#FF6B00', // Bright Accent Orange
                    light: '#F8FAFC', // Off-white
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            }
        },
    },
    plugins: [],
}
