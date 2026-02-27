const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', ...defaultTheme.fontFamily.sans],
                jakarta: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // High contrast, pure black background base
                'background': '#000000', // Pure Black
                'surface': '#0a0a0a',     // Barely lighter for elevated layers
                'on-surface': '#ededed',  // High-contrast off-white
                'muted': '#888888',       // Secondary text

                // Spot glowing colors
                'primary': {
                    DEFAULT: '#7c3aed',   // Vivid Violet for glows
                    hover: '#8b5cf6',
                },
                'secondary': '#06b6d4',   // Vivid Cyan
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}