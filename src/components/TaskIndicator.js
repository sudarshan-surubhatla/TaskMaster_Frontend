import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from './Theme/Themes';

function TaskIndicator() {
    const { theme} = useTheme();
    return ( 
        <div className=' flex-grow'>
            <nav>
                <ul className={`flex gap-3 justify-between p-3 rounded-lg shadow-2xl ${theme === 'light'? "" :"bg-slate-500"} `} style={{background: theme === 'light'? '#6a659f':'', color: 'white'}}   >
                    <li>
                        <NavLink to="/">All Task </NavLink>
                    </li>
                    <li>
                        <NavLink to="/active">Active</NavLink>
                    </li>
                    <li>
                        <NavLink to="/completed">Completed</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
export default TaskIndicator;