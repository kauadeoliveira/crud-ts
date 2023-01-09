export default {
    title: 'dark',

    palette: {
        colors: {
            primary: {
                light: '#a883ff',
                main: '#8257e6',
                dark: '#6837e0'
            },
            background: {
                dark: '#121214',
                main: '#202024',
                light: '#41414a'
            },
            priorities: {
                high: {
                    background: '#d32f2f',
                    hover: '#e57373'
                },
                middle: {
                    background: '#388e3c',
                    hover: '#81c784'
                },
                low: {
                    background: '#f57c00',
                    hover: '#ffb74d'
                }
            }
        },
        text: {
            primary: '#657575',
            disabled: '#A0AAB4'
        },
        icons: {
            primary: {
                main: '#dedede',
                hover: '#fff'
            }
        }
    },
    dimensions: {
        button: {
            borderRadius: '10px',
        },
        modal: {
            borderRadius: '8px'
        }
    }
}