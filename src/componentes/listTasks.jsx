    import { ChevronRightIcon, TrashIcon } from "lucide-react";
    import { useNavigate } from "react-router-dom";
import ButtonIcon from "./buttonIcon";

    function ListTasks(props){
        const navigate = useNavigate();

        function onSeeDetailsClick(task){
            const query = new URLSearchParams();
            query.set("title", task.title);
            query.set("description", task.description);
            navigate(`/Task?${query.toString()}`);
        }

        return (
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {props.tasks.map((task)=> ( 
                    <li key={task.id} className="flex gap-2">
                        <button onClick={() => props.onTaskClick(task.id)} className={`bg-slate-400 text-white p-2  rounded-md w-full text-left ${task.isCompleted && 'line-through'}`}>
                            {task.title}
                        </button>
                        <ButtonIcon onClick={() => onSeeDetailsClick(task)}>
                            <ChevronRightIcon />
                        </ButtonIcon> 
                        <ButtonIcon onClick={() => props.onDeleteTask(task.id)}>
                            <TrashIcon />
                        </ButtonIcon> 
                    </li>
                ))}
            </ul>
        );
    }

    export default ListTasks