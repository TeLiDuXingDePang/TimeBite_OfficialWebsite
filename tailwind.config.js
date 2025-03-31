/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // 主色系统：低饱和度食材色谱
                'avocado': '#8C9E7E', // 牛油果核心绿
                'wheat': '#D4A57C',   // 烘焙小麦米
                'tomato': '#B3423A',  // 成熟番茄红

                // 辅助系统
                'sandstone': '#FAF6F0', // 基底色：砂岩白
                'truffle': '#4A2F2B',   // 强调色：黑松露深咖
            },
            fontSize: {
                'display': ['3.5rem', { lineHeight: '1.2' }],
                'heading': ['2.5rem', { lineHeight: '1.3' }],
                'subheading': ['1.75rem', { lineHeight: '1.4' }],
            },
            fontFamily: {
                'sans': ['Noto Sans SC', 'sans-serif'],
                'serif': ['Noto Serif SC', 'serif'],
            },
            spacing: {
                '18': '4.5rem',
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
            },
        },
    },
    plugins: [],
} 