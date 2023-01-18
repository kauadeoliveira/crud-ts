import styled from "styled-components";
import { TaskProps } from "../../types";

interface TaskStyleProps extends TaskProps{
    editMode: boolean;
    priority: string | undefined;
    animation: string
}

interface CheckTaskStyleProps {
    check: boolean | undefined;
}



export const TaskContainer = styled.div<Pick<TaskStyleProps, 'editMode'>>`
    background-color: ${({ theme }) => theme.palette.background.main};
    height: 80px;
    width: 100%;
    border-radius: 10px;
    transition: .3s ease;

    .edit-mode, .default-mode{
        align-items: center;
    }

    .edit-mode{
        display: ${({ editMode }) => editMode ? 'flex' : 'none'};
    }

    .default-mode{
        display: ${({ editMode }) => editMode ? 'none' : 'flex'};
    }

`

export const DefaultModeTask = styled.div<Pick<TaskStyleProps, 'priority' | 'animation'>>`
    cursor: pointer;
    animation: ${({ animation }) => animation};
    animation-duration: 1.5s;
    height: 100%;
    justify-content: space-between;

    border-left: 10px solid;
    border-radius: inherit;
    border-color: ${({ priority, theme }) => {
        switch(priority){
            case 'high': 
                return theme.palette.priorities.high.light;
            break;
            case 'middle':
                return theme.palette.priorities.middle.light;
            break;
            default:
                return theme.palette.priorities.low.light;
            break;
        }
    }};
`

export const TaskDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    margin-left: 5px;
    padding: 0 5px;
`

export const CheckTask = styled.div<CheckTaskStyleProps>`
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${({ check, theme }) => check ? theme.palette.primary.main : '#fff'};

    svg{
        width: 20px;
        height: 20px;
        visibility: ${({ check }) => check ? 'visible' : 'hidden'};
        fill: ${({ check, theme }) => check ? '#fff' : theme.palette.primary.main};
    }

    &:hover{
        svg{
            visibility: visible;
        }
    }
`


export const TaskDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;

    .title-task{
        font-size: 1.8em;
        font-weight: bold;
    }

    .date-task{
        font-size: 1.3em;
    }
`

export const TaskIconButton = styled.div`
    cursor: pointer;
    transition: all .2s;

    svg{
        width: 20px;
        height: 20px;
        fill: #ff200c;
    }

    &:hover {
        svg{
            fill: #ff795b;
        }
    }
`

export const EditModeTask = styled.div`
    border-radius: inherit;
    display: flex;
    justify-content: space-between;
    padding: 5px;

    div:nth-child(2){
        align-self: flex-end;
    }
`

export const EditModeInputs = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 5px;
`

export const SelectPriority = styled.select`
    background-color: ${({ theme }) => theme.palette.background.dark};
    color: #fff;
    border: none;
    padding: 5px;
    border-radius: 5px;
    width: 25%;
    height: 30px;
    outline: none;
`

