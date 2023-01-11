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
                },
                priorities: {
                    high: {
                        dark:string;
                        main: string;
                        light:string;
                    },
                    middle: {
                        dark:string;
                        main: string;
                        light:string;
                    },
                    low: {
                        dark:string;
                        main: string;
                        light:string
                    }
                }
            },
            text: {
                primary: string;
                disabled: string;
            },
        },
        dimensions: {
            button: {
                borderRadius: string;
            },
            modal: {
                borderRadius: string;
            }
        }
    }
}