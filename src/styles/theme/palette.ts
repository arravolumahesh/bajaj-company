import {PaletteOptions, ThemeOptions} from '@mui/material';

/**
 * @ThemeOptions['palette']
 * Here we can define the palette
 *
 * @see https://material-ui.com/customization/palette/#palette
 */
export const PaletteTheme = (mode: PaletteOptions['mode']): ThemeOptions['palette'] => {
    const isLight = mode !== 'dark';
    return {
        mode: mode,
        primary: {
            main: '#326CCF',
            light: '#e3f2fd',
            dark: '#005dac',
            50: '#e3f2fd',
            100: '#bbdefb',
            200: '#90caf9',
            300: '#64b5f6',
            400: "#249DD1",
            500: '#326CCF',
            600: '#1e88e5',
            700: '#1976d2',
            800: '#1565c0',
            900: '#0d47a1',
            A100: '#82b1ff',
            A200: '#448aff',
            A400: '#2979ff',
            A700: '#2962ff',
            contrastText: '#fff',
        },
        secondary: {
            main: '#3f51b5',
            light: '#e8eaf6',
            dark: '#1a237e',
            50: '#e8eaf6',
            100: '#c5cae9',
            200: '#9fa8da',
            300: '#7986cb',
            400: '#5c6bc0',
            500: '#3f51b5',
            600: '#3949ab',
            700: '#303f9f',
            800: '#283593',
            900: '#1a237e',
            A100: '#8c9eff',
            A200: '#536dfe',
            A400: '#3d5afe',
            A700: '#304ffe',
            contrastText: '#fff',
        },
        success: {
            main: '#66bb6a',
            light: '#e8f5e9',
            dark: '#2e7d32',
            '50': '#e8f5e9',
            '100': '#c8e6c9',
            '200': '#a5d6a7',
            '300': '#81c784',
            '400': '#66bb6a',
            '500': '#4caf50',
            '600': '#43a047',
            '700': '#388e3c',
            '800': '#2e7d32',
            '900': '#1b5e20',
            A100: '#b9f6ca',
            A200: '#69f0ae',
            A400: '#00e676',
            A700: '#00c853',
            contrastText: '#000',
        },
        warning: {
            main: '#ffa726',
            light: '#fff3e0',
            dark: '#f57c00',
            '50': '#fff3e0',
            '100': '#ffe0b2',
            '200': '#ffcc80',
            '300': '#ffb74d',
            '400': '#ffa726',
            '500': '#ff9800',
            '600': '#fb8c00',
            '700': '#f57c00',
            '800': '#ef6c00',
            '900': '#e65100',
            A100: '#ffd180',
            A200: '#ffab40',
            A400: '#ff9100',
            A700: '#ff6d00',
            contrastText: '#000',
        },
        info: {
            main: '#673ab7',
            light: '#ede7f6',
            dark: '#311b92',
            '50': '#ede7f6',
            '100': '#d1c4e9',
            '200': '#b39ddb',
            '300': '#9575cd',
            '400': '#7e57c2',
            '500': '#673ab7',
            '600': '#5e35b1',
            '700': '#512da8',
            '800': '#4527a0',
            '900': '#311b92',
            A100: '#b388ff',
            A200: '#7c4dff',
            A400: '#651fff',
            A700: '#6200ea',
            contrastText: '#fff',
        },
        error: {
            main: '#f44336',
            light: '#e57373',
            dark: '#d32f2f',
            50: '#ffebee',
            100: '#ffcdd2',
            200: '#ef9a9a',
            300: '#e57373',
            400: '#ef5350',
            500: '#f44336',
            600: '#e53935',
            700: '#d32f2f',
            800: '#c62828',
            900: '#b71c1c',
            A100: '#ff8a80',
            A200: '#ff5252',
            A400: '#ff1744',
            A700: '#d50000',
            contrastText: '#fff',
        },
        grey: {
            '50': '#e6e6e6',
            '100': '#cccccc',
            '200': '#b3b3b3',
            '300': '#999999',
            '400': '#808080',
            '500': '#666666',
            '600': '#4d4d4d',
            '700': '#333333',
            '800': '#1a1a1a',
            '900': '#0c1200',
            A100: '#ffffff',
            A200: '#ffffff',
            A400: '#ffffff',

        },
        get text(): PaletteOptions['text'] {
            return {
                primary: isLight ? this?.grey?.['900'] : '#d7dcec',
                secondary: isLight ? this?.grey?.['A400'] : '#AEAEAE',
                disabled: isLight ? this?.grey?.['500'] : '#ffffff50',
                body: isLight ? this?.grey?.['900'] : '#d7dcec',
                subtitle: isLight ? this?.grey?.['800'] : '#AEAEAE',
                caption: isLight ? this?.grey?.['700'] : '#ffffff50',
            };
        },
        background: {
            default: isLight ? '#fff' : '#121212',
            paper: isLight ? '#f5f5f5' : '#1e1e1e',
        },
        common: {
            black: '#000',
            white: '#fff',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        get divider() {
            return isLight ? this?.grey?.['200'] : '#424242';
        },
    };
};

declare module '@mui/material/styles' {
    /**
     * @mui/material/styles
     * Here we can override the TypeText
     */
    interface TypeText {
        body: string;
        subtitle: string;
        caption: string;
    }
}
