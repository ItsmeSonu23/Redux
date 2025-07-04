import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./Actions";

const initialState = {
    task: JSON.parse(localStorage.getItem("task")) || [],
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = [...state.task, action.payload];
            localStorage.setItem("task", JSON.stringify(newTask));
            return { ...state, task: newTask };

        case DELETE_TASK:
            const deletedTask = state.task.filter((task) => task.id !== action.payload.id);
            localStorage.setItem("task", JSON.stringify(deletedTask));
            return { ...state, task: deletedTask };

        case TOGGLE_TASK:
            const updatedTask = state.task.map((task) => {
                if (task.id == action.payload.id) {
                    return { ...task, completed: !task.completed }
                }
                return task;
            })
            localStorage.setItem("task", JSON.stringify(updatedTask));
            return { ...state, task: updatedTask };

        default:
            return state;
    }
}