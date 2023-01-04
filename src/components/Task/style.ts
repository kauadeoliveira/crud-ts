import styled from "styled-components";

interface CheckTaskStyleProps {
    check: boolean | undefined;
    icon?: string;
}

interface TaskStyleProps {
    priority?: string;
}

interface DeleteTaskStyleProps {
    icon: string;
}

export const TaskWrapper = styled.div`
    width: 100%;
    gap: 10px;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.colors.background.main};
    border-radius: 5px;
    padding-right: 10px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    font-weight: bold;
    width: 100%;

    span{
        text-decoration: ${({ check }) => check ? 'line-through' : 'none'};
        color: ${({ check, theme }) => check ? theme.palette.text.disabled : ''};
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
    width: 25px;
    height: 25px;
    background-color: ${({ check, theme }) => check ? theme.palette.colors.primary.main : '#F5F5F7'};
    background-image: url(${({ check, icon }) => check ? icon : ''});
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    border-radius: 100%;

    &:hover{
        background-color: ${({ check, theme }) => check ? theme.palette.colors.primary.light : '#FFF'};
    }
`

export const TaskContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

export const DeleteTaskButton = styled.div<DeleteTaskStyleProps>`
    background-image: url(${({ icon }) => icon});
    width: 25px;
    height: 25px;
    cursor: pointer;
`