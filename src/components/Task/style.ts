import styled from "styled-components";

export const TaskWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    background-color: ${({ theme }) => theme.palette.colors.background.main};
`

export const TaskPriority = styled.div`
    background-color: ${({ theme }) => theme.palette.colors.priorities.high.background};
    height: 100%;
    width: 5px;
`

export const TaskDetails = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    font-weight: bold;

    .task-title{
        font-size: 1.3em;
    }

    .task-date{
        color: ${({ theme }) => theme.palette.text.disabled};
    }
`
