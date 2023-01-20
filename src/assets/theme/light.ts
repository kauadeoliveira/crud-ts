export default {
    title: 'dark',

    palette: {
        main: {
            primary: '#0080ff',
            secondary: '#008eff',
            tertiary: '#279fff',
        },
        background: {
            primary: '#f6fafd',
            secondary: '#fff',
            tertiary: '#e7e7e7',
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
            primary: '#000',
            disabled: '#ACA9A9'
        },
        others: {
            borderColor: '#c2c2c2',
            closeButton: {
                main: '#c2c2c2',
                hover: '#0080ff'
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