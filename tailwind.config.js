/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                rubik: ['Rubik', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif']
            },
            screens: {
                '2xs': '385px',
                'md-2': '800px',
                'lg-2': '1060px',
                'lg-3': '1125px',
                // 'lg-4': '1165px',
                'xs': '410px',
            },
            colors: {
                'coral-red': "#FF4D30",
                'coral-black': "#010103"
            }
        },
    },
    plugins: [],
}