import styled from "styled-components";

<<<<<<< HEAD
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
=======
export const ToggeButtonContainer = styled.div`
    label{
        width: 500px;
        height: 200px;
        position: relative;
        background: #ebebeb;
        border-radius: 200px;
        box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4);
        cursor: pointer;
        display: block;
        transition: .3s;
    }

    label:after{
        content: "";
        width: 180px;
        height: 180px;
        position: absolute;
        top: 10px;
        left: 10px;
        display: block;
        background: linear-gradient(180deg, #ffcc89, #d8860b);
        border-radius: 180px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
        transition: .3s;
    }

    input{
        width: 0;
        height: 0;
        visibility: hidden
    }

    input:checked + label{
        background: #242424;
    }

    input:checked + label:after{
        left: 490px;
        transform: translateX(-100%);
        background: linear-gradient(180deg, #777, #3a3a3a);
    }

    label:active:after{
        width: 260px;
    }
>>>>>>> parent of 90a21fa (feat: implement themeSwitchButton)
`
// cria uma div container com label e input dentro, facilita a estilização 