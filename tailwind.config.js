/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    dark: '#050505', // True Black (Legacy Original)
                    card: '#141418', // Original Card
                },
                primary: '#512FEB', // Vivid Purple
                accent: '#3B88FC', // Bright Blue
                text: {
                    main: '#FFFFFF', // Keeping white for legibility
                    muted: '#CAD7E7', // Light Blue/Grey provided
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            keyframes: {
                shine: {
                    '0%': { left: '-100%' },
                    '100%': { left: '200%' }
                }
            },
            animation: {
                shine: 'shine 1.5s ease-in-out infinite'
            }
        },
    },
    plugins: [],
}
