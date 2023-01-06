import styled from "styled-components";
import { TaskProps } from "../../types";

interface TaskStyleProps extends TaskProps{
    editMode: boolean;
}

interface CheckTaskStyleProps {
    check: boolean | undefined;
    icon: string;
}

export const TaskContainer = styled.div<Pick<TaskStyleProps, 'editMode'>>`
    background-color: ${({ theme }) => theme.palette.colors.background.main};
    height: 70px;
    width: 100%;
    border-radius: 10px;

    .edit-mode{
        display: ${({ editMode }) => editMode ? 'flex' : 'none'};
    }

    .default-mode{
        display: ${({ editMode }) => editMode ? 'none' : 'flex'};
    }
`


export const TaskPriority = styled.div<Pick<TaskStyleProps, 'priority'>>`
    height: 70px;
    width: 10px;
    background-color: ${({ priority, theme }) => {
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
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`
export const CheckTask = styled.div<CheckTaskStyleProps>`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: ${({ check, theme }) => check ? theme.palette.colors.primary.main : '#fff'};
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
