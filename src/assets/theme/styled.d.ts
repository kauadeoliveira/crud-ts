import 'styled-components'


declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        palette: {
            main: {
                primary: string;
                secondary: string;
                tertiary: string;
            },
            background: {
                primary: string;
                secondary: string;
                tertiary: string;
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
            },
            text: {
                primary: string;
                disabled: string;
            },
            others: {
                borderColor: string;
                closeButton: {
                    main: string,
                    hover: string
                }
            }
        },
        dimensions: {
            button: {
                borderRadius: string;
            },
            modal: {
                borderRadius: string;
            },
            input: {
                padding: string;
                borderRadius: string;
                border: string;
            }
        }
    }
}