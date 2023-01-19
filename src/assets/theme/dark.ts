export default {
    title: 'dark',

    palette: {
        main: {
            primary: '#8257e6',
            secondary: '#6837e0',
            tertiary: 'rgb(130 87 230 / 28%)',
        },
        background: {
            primary: '#0B0B0D',
            secondary: '#121214',
            tertiary: '#202024',
            // light: '#41414a'
        },
        priorities: {
            high: {
                dark:'#800000',
                main: '#ff200c',
                light:'#ff795b',
            },
            middle: {
                dark:'#006100',
                main: '#309124',
                light:'#a4d89e',
            },
            low: {
                dark: '#ffa710',
                main: '#ffd920',
                light: '#fff597',
            }
        },
        text: {
            primary: '#fff',
            disabled: '#c2c2c2'
        },
        others: {
            borderColor: 'transparent',
            closeButton: {
                main: '#c2c2c2',
                hover: '#8257e6'
            }
        }
    },
    dimensions: {
        button: {
            borderRadius: '5px',
        },
        modal: {
            borderRadius: '8px'
        },
        input: {
            padding: '3px 5px',
            borderRadius: '5px',
            border: '1px solid',
        }
    }
}