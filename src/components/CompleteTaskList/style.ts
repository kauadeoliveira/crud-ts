import styled from "styled-components";

interface AccordionStyleProps {
    expand: boolean;
    visibility: boolean;
}
export const AccordionWrapper = styled.div<Pick<AccordionStyleProps, 'visibility'>>`
    display: ${({ visibility }) => visibility ? 'block' : 'none'};
    padding: 1rem;
`
export const AccordionHead = styled.div<Pick<AccordionStyleProps, 'expand'>>`
    border-bottom: ${({ expand }) => expand ? 'none' : '0.5px solid #fff'};
    display: flex;
    align-items: center;
    height: 50px;
    cursor: pointer;
    font-size: 1.5em;
    font-weight: bold;
`

export const AccordionButton = styled.div<Pick<AccordionStyleProps, 'expand'>>`
    height: 20px;
    width: 20px;

    img{
        transition: all .2s;
        transform: rotate(${({ expand }) => expand ? '90deg' : '0'})
    }

`
export const AccordionBody = styled.div<Pick<AccordionStyleProps, 'expand'>>`
    display: ${({ expand }) => expand ? 'flex' : 'none'};
    flex-direction: column;
    gap: 5px;
`