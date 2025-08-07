import { useDispatch } from 'react-redux'
import { deleteTask, toggleTask } from '../redux/Actions';

export const Taskitem = ({ task }) => {
    const dispatch = useDispatch();
    return (
        <li className={task.completed ? 'completed' : ''}>
            <span onClick={() => dispatch(toggleTask(task.id))}>
                {task.completed ? "❌" : "✅"}
                {task.task}
            </span>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
    )
}
