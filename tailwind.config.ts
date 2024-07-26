import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '18px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['32px', '40px'],
      '3xl': ['48px', '56px'],
      '4xl': ['56px', '64px'],
      '5xl': ['64px', '70px'],
    },
    extend: {
      colors: {
        bgpry: '#F5F5F5',
        bgsec: '#EBEBEB',
        bgter: '#D9D9D9',
        txpry: '#171717',
        txsec: '#525252',
        txter: '#707070',
        verdepry: '#8FFFC9',
        verdesec: '#00A161',
        vermelhopry: '#FFA8A8',
        vermelhosec: '#FF3333',
        azulpry: '#85D4FF',
        azulsec: '#0083C9',
        cinzapry: '#CCCCCC',
        cinzasec: '#808080',
        amarelopry: '#FFF5D7',
        white: '#FFFFFF',
      }
    },
  },
  plugins: [],
};
export default config;
