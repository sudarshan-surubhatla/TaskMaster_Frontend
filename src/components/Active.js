import React from 'react';
import Task from './Task/Task';
import { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import { useTheme } from './Theme/Themes';
function Active() {
    const{theme} = useTheme();
    const { tasks } = useContext(TaskContext);
    return ( 
        <div>
        {
            (tasks.length !==0) ? (
                tasks.map((task, index) => {
                    return (
                        !task.completed && <Task
                            key={index}
                            task={task}
                            id={index}
                        />
                    )
                })
            ) : (
                <h1 class={`${theme==='dark'? 'text-white':'textblack' }`}>No Task Found</h1>
            )
        }
    </div>
     );
}

export default Active;