import { TaskDetails, TaskPriority, TaskWrapper } from "./style";

export default function Task() {
    return(
        <TaskWrapper>
            <TaskPriority />
            <TaskDetails>
                <span className="task-title">Academia</span>
                <span className="task-date">1/1/2023</span>
            </TaskDetails>
        </TaskWrapper>
    )
}