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
            }
        }
    }
}