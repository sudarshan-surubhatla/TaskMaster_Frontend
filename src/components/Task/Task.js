import React from 'react';
import moment from 'moment';
import "./task.css";
import { useContext, useState } from 'react';
import TaskContext from '../../context/TaskContext';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axiosInstance from '../../Axios/axios.js';
import TokenContext from '../../context/TokenContext';
import { useTheme } from '../Theme/Themes.js';

function Task({ task, id }) {
    const { theme } = useTheme();
    const { userToken } = useContext(TokenContext);
    const { dispatch } = useContext(TaskContext);
    const [editMode, setEditMode] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDescription, setEditedDescription] = useState(task.description);
    const [editedTime, setEditedTime] = useState(task.datetime);
    const handleRemove = async () => {
        showToast("Task Deleted Successfully", "red");
        try {
            await axiosInstance.delete(`/task/removeTask/${task._id}`, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });
            dispatch({
                type: "REMOVE_TASK",
                id: task._id
            });
        } catch (error) {
            console.error("Error removing task:", error);
        }
    }
    const handleMarkDone = async () => {
        try {
            const updatedTask = await axiosInstance.put(
                `/task/updateTask/${task._id}`,
                {
                    completed: !task.completed,
                },
                {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
                }
            );
            dispatch({
                type: "MARK_DONE",
                id: task._id,
                completed: !task.completed,
            });
        } catch (error) {
            console.error("Error updating task completion status", error);
        }
    };
    const handleEdit = () => {
        setEditMode(true);
    };

const showToast = (message, color) => {
        const toast = document.getElementById('toast');
        toast.style.display = "block";
        toast.innerHTML = message;
        toast.style.backgroundColor = color;
        setTimeout(hideToast, 2000);
    }
    const hideToast = () => {
        const toast = document.getElementById('toast');
        toast.style.display = "none";
        toast.innerHTML = "";
        toast.style.backgroundColor = "";
    }
    
    const handleSave = async () => {
        try {
            const updatedTask = await axiosInstance.put(
                `/task/updateTask/${task._id}`,
                {
                    title: editedTitle,
                    description: editedDescription,
                    datetime: editedTime
                },
                {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
                }
            )
            showToast("Task Updated Successfully", "#51b8e1");

            dispatch({
                type: "EDIT_TASK",
                id: task._id,
                editedTitle: editedTitle,
                editedDescription: editedDescription,
                editedTime: editedTime
            });

            setEditMode(false);
        } catch (error) {
            console.error("Error updating task", error);
        }
    };
    const handleCancel = () => {
        setEditedTitle(task.title);
        setEditedDescription(task.description);
        setEditedTime(task.datetime);
        setEditMode(false);
    };

    return (
        <div className='py-4 rounded-lg shadow-md flex items-center justify-center gap-2 mb-3' style={{ backgroundColor: theme === 'light' ? '#c8c5eb' : 'rgB(27,43,65)' }}>
            <div className="mark-done ml-4 mr-2">
                <input type="checkbox" class="checkbox" onChange={handleMarkDone} checked={task.completed} />
            </div>
            <div className={`task-info text-sm w-11/12 ${theme === 'light' ? 'text-black' : 'text-white'} ${task.completed ? 'completed-task' : ''}`}>
                {editMode ? (
                    <>
                        <input
                            type="text"
                            className={`edit-input  ${theme === 'light' ? 'text-black' : 'text-white'}`}
                            style={{ borderBottom: theme === 'light' ? '2px solid black' : '2px solid white' }}
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                        />
                        <textarea
                            className="edit-textarea"
                            value={editedDescription}
                            style={{ borderBottom: theme === 'light' ? '2px solid black' : '2px solid white' }}
                            onChange={(e) => setEditedDescription(e.target.value)}
                        />
                        <input
                            type="datetime-local"
                            className="edit-date "
                            style={{ borderBottom: theme === 'light' ? '2px solid black' : '2px solid white' }}
                            value={editedTime}
                            onChange={(e) => setEditedTime(e.target.value)}
                        />
                    </>
                ) : (
                    <>
                        <h4 className={`task-title text-lg  ${theme === 'light' ? 'text-black' : 'text-white'} capitalize ${task.completed ? 'completed-text' : ''}`}>{task.title}</h4>
                        <p className={`task-description  ${theme === 'light' ? 'text-black' : 'text-white'}  ${task.completed ? 'completed-text' : ''}`}>{task.description}</p>
                    </>
                )}
                <div className='italic opacity-60'>
                    {task?.createdAt ? (
                        <p className={` ${theme === 'light' ? 'text-black' : 'text-white'} ${task.completed ? 'completed-text' : ''}`}>{moment(task.createdAt).fromNow()}</p>
                    ) : (
                        <p className={` ${theme === 'light' ? 'text-black' : 'text-white'} ${task.completed ? 'completed-text' : ''}`}>just now</p>
                    )}
                    {task?.datetime && (
                        <p className={` ${theme === 'light' ? 'text-black' : 'text-white'} ${task.completed ? 'completed-text' : ''}`}>Reminder: {moment(task.datetime, moment.ISO_8601).format('MMMM D, YYYY h:mm A')}</p>
                    )}
                </div>
            </div>
            <div className="edit-task text-sm text-white mr-1">
                {editMode ? (
                    <>
                        <div className='flex flex-col items-center pr-5'>
                            <button type="button" onClick={handleSave} class={`${theme === 'dark' ? 'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800' : 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'}`}>Save</button>
                            <button type="button" onClick={handleCancel} class={` ${theme === 'dark' ? 'text-yellow-400 hover:text-black border border-yellow-400 hover:bg-yellow-100 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-black dark:hover:bg-yellow-300 dark:focus:ring-yellow-900' : 'text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'}`}>Cancel</button>
                        </div>
                    </>
                ) : (
                    <EditIcon
                        style={{ fontSize: 30, cursor: 'pointer' }}
                        size="large"
                        onClick={handleEdit}
                        className="edit-task-btn bg-blue-700 rounded-full border-2 shadow-2xl border-white p-1"
                    />
                )}
            </div>
            <div className="remove-task text-sm text-white mr-5">
                <DeleteIcon
                    style={{ fontSize: 30, cursor: 'pointer' }}
                    size="large"
                    onClick={handleRemove}
                    className="remove-task-btn bg-red-700 rounded-full border-2 shadow-2xl border-white p-1" />
            </div>
        </div>
    );
}

export default Task;