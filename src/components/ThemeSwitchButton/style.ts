import styled from "styled-components";

interface ThemeSwitchButtonStyleProps {
    mode: 'light' | 'dark';
}

export const ToggleButtonContainer = styled.div<ThemeSwitchButtonStyleProps>`
    display: flex;
    width: 100%;
    height: 40px;
    border-radius: ${({ theme }) => theme.dimensions.button.borderRadius};
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    font-size: 12px;


    div{
        display: flex;
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

    .light{
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
        background-color: ${({ theme, mode}) => mode === 'dark' ? theme.palette.primary.hover : 'transparent'};
        span{
            color: ${({ theme, mode}) => mode === 'dark' ? '#fff' : theme.palette.primary.main};
        }
        svg{
            fill: ${({ theme, mode }) => mode === 'dark' ? '#fff' : theme.palette.primary.main}
        }
    }

`























// export const ToggeButtonContainer = styled.div`
//     label{
//         width: 100px;
//         height: 30px;
//         position: relative;
//         background: #ebebeb;
//         border-radius: 200px;
//         box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4);
//         cursor: pointer;
//         display: flex;
//         align-items: center;
//         transition: .3s;
//     }

//     label:after{
//         content: "";
//         width: 25px;
//         height: 25px;
//         position: absolute;
//         left: 5px;
//         display: block;
//         background: linear-gradient(180deg, #ffcc89, #d8860b);
//         border-radius: 180px;
//         box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
//         transition: .3s;
//     }

//     input{
//         width: 0;
//         height: 0;
//         visibility: hidden
//     }

//     input:checked + label{
//         background: #242424;
//     }

//     input:checked + label:after{
//         left: 95px;
//         transform: translateX(-100%);
//         background: linear-gradient(180deg, #777, #3a3a3a);
//     }

//     label:active:after{
//         width: 40px;
//     }

//     label svg{
//         position: absolute;
//         width: 20px;
//         height: 20px;
//         z-index: 100;
//     }

//     label svg.sun{
//         left: 7px;
//         fill: #fff;
//         transition: .3s;
//     }

//     label svg.moon{
//         left: 74px;
//         fill: #7e7e7e;
//         transition: .3s;
//     }

//     input:checked + label svg.sun{
//         fill: #7e7e7e;
//     }

//     input:checked + label svg.moon{
//         fill: #fff;
//     }
// `
// cria uma div container com label e input dentro, facilita a estilização 