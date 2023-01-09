import styled from "styled-components";
import { TaskProps } from "../../types";

interface TaskStyleProps extends TaskProps{
    editMode: boolean;
    priority: string | undefined;
    animation: string
}

interface CheckTaskStyleProps {
    check: boolean | undefined;
    icons: string[];
}

interface TaskButton {
    icons: string[];
}

export const TaskContainer = styled.div<Pick<TaskStyleProps, 'editMode'>>`
    background-color: ${({ theme }) => theme.palette.colors.background.main};
    height: 70px;
    width: 100%;
    border-radius: 10px;

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
    border-left: 10px solid;
    border-color: ${({ priority, theme }) => {
        switch(priority){
            case 'high': 
                return theme.palette.colors.priorities.high.background;
            break;
            case 'middle':
                return theme.palette.colors.priorities.middle.background;
            break;
            default:
                return theme.palette.colors.priorities.low.background;
            break;
        }
    }};
    animation: ${({ animation }) => animation};
    animation-duration: 1.5s;
    height: 100%;
    border-radius: inherit;
    justify-content: space-between;
    padding: 5px;
`

export const TaskDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const CheckTask = styled.div<CheckTaskStyleProps>`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: ${({ check, theme }) => check ? theme.palette.colors.primary.main : '#fff'};
    background-image: url(${({ icons }) => icons[0]});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    transition: all .2s;

    &:hover{
        background-image: url(${({ check, icons }) => !check ? icons[1] : icons[0]})
    }
`

export const TaskDescription = styled.div`
    display: flex;
    flex-direction: column;

    .title-task{
        font-size: 1.8em;
        font-weight: bold;
    }

    .date-task{
        font-size: 1.3em;
    }
`

export const TaskButtons = styled.div`
    display: flex;
    gap: 5px;
`

export const TaskIconButton = styled.div<TaskButton>`
    height: 20px;
    width: 20px;
    cursor: pointer;
    background-image: url(${({ icons }) => icons[0]});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 100%;
    transition: all .2s;

    &:hover {
        background-image: url(${({ icons }) => icons[1]});
    }
`

export const TaskButton = styled.div`
    background-color: ${({ theme }) => theme.palette.colors.primary.main};
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: ${({ theme }) => theme.palette.colors.primary.light};
    }
`

export const EditModeTask = styled.div`
    width: 100%;
    border-radius: inherit;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;

`

export const EditModeInputs = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 5px;
`

export const SelectPriority = styled.select`
    background-color: ${({ theme }) => theme.palette.colors.background.dark};
    color: #fff;
    border: none;
    padding: 5px;
    border-radius: 5px;
    width: 20%;
    height: 25px;
    outline: none;

    &.select-selected{
        background-color: red;
    }
`