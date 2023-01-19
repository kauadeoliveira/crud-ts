import styled from "styled-components";

interface ThemeSwitchButtonStyleProps {
    mode: 'light' | 'dark';
}

export const ToggleButtonContainer = styled.div<ThemeSwitchButtonStyleProps>`
    .light, .dark{
        display: none;
    }

    div{
        cursor: pointer;
    }

    svg{
        width: 20px;
        height: 20px;
    }


    @media(min-width: 1024px) {
        display: flex;
        width: 100%;
        height: 40px;
        border-radius: ${({ theme }) => theme.dimensions.button.borderRadius};
        border: 1px solid ${({ theme }) => theme.palette.main.primary};
        font-size: 12px;

        .light{
            display: flex;
            border-right: 1px solid ${({ theme }) => theme.palette.main.primary};
            background-color: ${({ theme, mode }) => mode === 'light' ? theme.palette.main.tertiary : 'transparent'};
            span{
                color: ${({ theme, mode}) => mode === 'light' ? '#fff' : theme.palette.main.primary};
            }
            svg{
                fill: ${({ theme, mode }) => mode === 'light' ? '#fff' : theme.palette.main.primary}
            }
        }
    
        .dark{
            display: flex;
            background-color: ${({ theme, mode}) => mode === 'dark' ? theme.palette.main.tertiary : 'transparent'};
            span{
                color: ${({ theme, mode}) => mode === 'dark' ? '#fff' : theme.palette.main.primary};
            }
            svg{
                fill: ${({ theme, mode }) => mode === 'dark' ? '#fff' : theme.palette.main.primary}
            }
        }
    
        div{
            width: 100%;
            align-items: center;
            justify-content: center;
            padding: 2px;
            gap: 5px;
            cursor: pointer;
    
            svg{
                width: 15px;
                height: 15px;
            }
        }
    
        .icon-button{
            display: none;
        }
    }
`
// cria uma div container com label e input dentro, facilita a estilização 