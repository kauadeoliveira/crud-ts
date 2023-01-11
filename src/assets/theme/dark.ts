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
            }
        },
        text: {
            primary: '#fff',
            disabled: '#c2c2c2'
        },
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