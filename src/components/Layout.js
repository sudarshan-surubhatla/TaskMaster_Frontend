// Layout.js
import React from 'react';
import TaskIndicator from './TaskIndicator';
import CreateTask from './createTask/CreateTask';
import { Outlet } from 'react-router-dom';
import { useTheme } from './Theme/Themes';
import './Layout.css';

function Layout() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div style={{ background: theme === 'light' ? '#e0defa' : '#082032', color: theme === 'light' ? '#333' : '#fff' }}>
      <div>
        <div className="float-right mr-6 mt-4"style={{height: '25px', width: '50px'}}>Theme
      <div className="toggle_div  float-right " onClick={toggleTheme}>
            <div className={`toggle_circle  ${theme === 'light' ? "toggle_circle_active" : ""}`} />
          </div>
          </div>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <CreateTask />
          <div className='task-container w-auto mx-5 md:w-1/3 mt-6'>
            <div className='indicator '>
              <TaskIndicator />
            </div>
            <div className='outlet'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;