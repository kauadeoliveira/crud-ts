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
                    dark:'#8F0000',
                    main: '#ff1507',
                    light:'#ff795b',
                },
                middle: {
                    dark:'#003f00',
                    main: '#2aa31f',
                    light:'#78c96f',
                },
                low: {
                    dark: '#a87e00',
                    main: '#ffb300',
                    light: '#ffd54f',
                }
            }
        },
        text: {
            primary: '#657575',
            disabled: '#dedede'
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
            borderRadius: '5px',
        },
        modal: {
            borderRadius: '8px'
        }
    }
}