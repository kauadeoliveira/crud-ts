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
                        background: string;
                        hover: string;
                    },
                    middle: {
                        background: string;
                        hover:string;
                    },
                    low: {
                        background: string;
                        hover: string;
                    }
                }
            },
            text: {
                primary: string;
                disabled: string;
            },
            icons: {
                primary: {
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
            }
        }
    }
}