import styled from "styled-components";

interface CheckTaskStyleProps {
    check: boolean | undefined;
    icon?: string;
}

interface TaskStyleProps {
    priority?: string;
}

export const TaskWrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    background-color: ${({ theme }) => theme.palette.colors.background.main};
    border-radius: 5px;
`

export const TaskPriority = styled.div<TaskStyleProps>`
    background-color: ${({ priority, theme }) => {
        switch(priority){
            case 'high': 
                return theme.palette.colors.priorities.high.background;
            break;
            case 'middle':
                return theme.palette.colors.priorities.middle.background;
            break;
            case 'low':
                return theme.palette.colors.priorities.low.background;
            break;
            default: 
                return theme.palette.colors.priorities.low.background;
            break;
        }
    }};
    height: 100%;
    width: 5px;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
`

export const TaskDetails = styled.div<CheckTaskStyleProps>`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    font-weight: bold;

    span{
        text-decoration: ${({ check }) => check ? 'line-through' : 'none'};
        color: ${({ theme }) => theme.palette.text.disabled};
    }
    .task-title{
        font-size: 1.8em;
    }

    .task-date{
        color: ${({ theme }) => theme.palette.text.disabled};
        font-size: 1.3em;
    }
`
export const CheckTask = styled.div<CheckTaskStyleProps>`
    width: 30px;
    height: 30px;
    background-color: ${({ check, theme }) => check ? theme.palette.colors.primary.main : '#F5F5F7'};
    background-image: url(${({ check, icon }) => check ? icon : ''});
    background-repeat: no-repeat;
    cursor: pointer;
    border-radius: 100%;

    &:hover{
        background-color: ${({ check, theme }) => check ? theme.palette.colors.primary.light : '#FFF'};
    }
`

export const TaskContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`