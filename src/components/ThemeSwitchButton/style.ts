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
        border: 1px solid ${({ theme }) => theme.palette.primary.main};
        font-size: 12px;

        .light{
            display: flex;
            border-right: 1px solid ${({ theme }) => theme.palette.primary.main};
            background-color: ${({ theme, mode }) => mode === 'light' ? theme.palette.primary.hover : 'transparent'};
            span{
                color: ${({ theme, mode}) => mode === 'light' ? '#fff' : theme.palette.primary.main};
            }
            svg{
                fill: ${({ theme, mode }) => mode === 'light' ? '#fff' : theme.palette.primary.main}
            }
        }
    
        .dark{
            display: flex;
            background-color: ${({ theme, mode}) => mode === 'dark' ? theme.palette.primary.hover : 'transparent'};
            span{
                color: ${({ theme, mode}) => mode === 'dark' ? '#fff' : theme.palette.primary.main};
            }
            svg{
                fill: ${({ theme, mode }) => mode === 'dark' ? '#fff' : theme.palette.primary.main}
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