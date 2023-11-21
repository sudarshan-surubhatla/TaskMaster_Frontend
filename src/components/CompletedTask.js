import moment from "moment"
import { useTheme } from "./Theme/Themes";
function CompletedTask({task}) {
    const { theme} = useTheme();
    return ( 
        <div className=' py-4 rounded-lg shadow-md flex items-center justify-center gap-2 mb-3' style={{ backgroundColor: theme==='light'? '#caccdb' :'rgB(27,43,65)' }}>
            <div className="task-info text-white text-slate-900 text-sm w-10/12">
                <h4 className={`task-title text-lg capitalize  ${theme === 'light'? 'text-black':'text-white'}`}>{task.title}</h4>
                <p className={`task-description  ${theme === 'light'? 'text-black':'text-white'}`}>{task.description}</p>
                <div className={`italic opacity-60  ${theme === 'light'? 'text-black':'text-white'}`}>
                    {
                        task?.createdAt ? (
                            <p>{moment(task.createdAt).fromNow()}</p>
                        ) : (
                            <p>just now</p>
                        )
                    }
                </div>
            </div>
        </div>
     );
}

export default CompletedTask;