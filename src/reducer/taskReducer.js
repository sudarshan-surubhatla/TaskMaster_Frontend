function taskReducer(tasks, action) {
    console.log("taskreducer");
    switch (action.type) {
        case "ADD_TASK": {
            return [
                ...tasks,
                {
                    title: action.title,
                    description: action.description,
                    completed: action.completed,
                    datetime: action.datetime
                }
            ]
        }
        case "SET_TASK": {
            return action.payload
        }
        case "REMOVE_TASK": {
            return tasks.filter((task) => task._id !== action.id)
        }
        case "EDIT_TASK": {
            return tasks.map((task) => {
                if (task._id === action.id) {
                    return {
                        ...task,
                        title: action.editedTitle,
                        description: action.editedDescription,
                        datetime: action.editedTime
                    };
                }
                return task;
            });
        }
        case "MARK_DONE": {
            return tasks.map((task, index) => {
                if (task._id === action.id) {
                    return {
                        ...task,
                        completed: action.completed
                    }
                }
                return task
            })
        }
        default: {
            throw Error("Unknown Action" + action.type)
        }
    }
}
export default taskReducer;