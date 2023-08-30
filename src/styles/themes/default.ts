// src/styles/themes/default.ts
export type ThemeProps = typeof ThemeDefault


const ThemeDefault = {
    colors: {
        primary: '#53BDBD',
    }
} as const

export default ThemeDefault;
