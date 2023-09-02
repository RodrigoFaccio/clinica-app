// src/styles/themes/default.ts
export type ThemeProps = typeof ThemeDefault


const ThemeDefault = {
    colors: {
        primary: '#53BDBD',
        white: '#fff',

    }
} as const

export default ThemeDefault;
