module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './content/**/*.md'],
    theme: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/typography')
    ]
};
