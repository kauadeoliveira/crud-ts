import 'styled-components'


declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        palette: {
            colors: {
                primary: {
                    light: string;
                    main: string;
                    dark: string;
                },
                background: {
                    dark: string;
                    main: string;
                    light: string;
                }
            },
            text: {
                primary: string;
            },
        },
        dimensions: {
            button: {
                borderRadius: string;
            }
        }
    }
}