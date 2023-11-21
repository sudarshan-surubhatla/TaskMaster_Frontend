import React, { useState } from 'react';
import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import TokenContext from '../../context/TokenContext';
import axios from "../../Axios/axios.js"
import "./CreateTask.css"
import { useTheme } from '../Theme/Themes.js';

function CreateTask() {
    const { theme } = useTheme();
    const { dispatch } = useContext(TaskContext)
    const { userToken } = useContext(TokenContext)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [datetime, setDatetime] = useState("")
    const [toast, setToast] = useState();
    const [userTimeZone, setUserTimeZone] = useState("Asia/Kolkata");

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "/task/addTask",
                { title, description, datetime, userTimeZone }, 
                {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
                }
            );
            setToast(res.data);
            showToast();
        } catch (error) {
            console.log(error);
        }
        dispatch({
            type: "ADD_TASK",
            title,
            description,
            datetime,
        });
        setTitle("");
        setDescription("");
        setDatetime("");
        setUserTimeZone("Asia/Kolkata"); 
        window.location.reload();
    };
    const showToast = () => {
        const toast = document.getElementById('toast');
        toast.innerHTML = "Task Added Succesfully"
        toast.style.display = "block";
        setTimeout(hideToast, 2000)
    }
    const hideToast = () => {
        const toast = document.getElementById('toast');
        toast.style.display = "none";
        toast.innerHTML = "none"
    }
    return (
        <div className="addContainer md:w-1/3 md:mx-auto mx-3 mt-6 flex justify-center py-4 rounded-lg shadow-md  " style={{ marginBottom: '180px', backgroundColor: theme === 'light' ? '#c8c5eb' : 'rgB(27,43,65)' }}>
            <div className='w-11/12' >
                <h2 className={`text-2xl  text-center mt-2 ${theme === 'light' ? 'text-black' : 'text-white'}`} style={{ fontSize: '30px', fontFamily: 'Agbalumo, sans-serif' }} >Add a New Task</h2>
                <form onSubmit={handleAdd} style={{ padding: '10px', border: theme === 'light' ? '5px solid #e0defa' : '5px solid #374151' }} >
                    <div>
                        <label htmlFor="title" className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            required
                            style={{ background: theme === 'light' ? '#e6e8f5' : '' }}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Add new To-do Item'
                            className={`bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${theme === 'light' ? 'text-black' : 'text-white'}`} />

                    </div>
                    <div className='my-3'>
                        <label htmlFor="description" className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>Description</label>
                        <textarea
                            rows={5}
                            name="description"
                            id="description"
                            value={description}
                            required
                            style={{ resize: "none", background: theme === 'light' ? '#e6e8f5' : '' }}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder='Write a brief description'
                            className={`bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${theme === 'light' ? 'text-black' : 'text-white'}`} />
                    </div>
                    <div className='my-3'>
                        <label htmlFor="datetime" className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>Remind me at:</label>
                        <input
                            type="datetime-local"
                            name="datetime"
                            style={{ background: theme === "light" ? "#e6e8f5" : "" }}
                            id="datetime"
                            required
                            value={datetime}
                            onChange={(e) => setDatetime(e.target.value)}
                            className={`bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${theme === 'light' ? 'text-black' : 'text-white'}`}
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type='submit'
                            className=' bg-blue-700 rounded-md text-white px-5 py-1 '
                        >Add</button>
                    </div>
                </form>
                <div className="toast bg-green-600 text-white p-3 rounded-xl shadow-2xl text-center absolute bottom-4 left-1/2 -translate-x-1/2" id='toast'>
                    <p></p>
                </div> 
               
            </div>
        </div>

    );
}
export default CreateTask;
