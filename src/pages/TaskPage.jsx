    import { ChevronLeftIcon } from "lucide-react";
    import { useNavigate, useSearchParams } from "react-router-dom";
    import Title from "../componentes/title";

    function TaskPage(){
        const navigate = useNavigate();
        const [serachParamns] = useSearchParams();
        const title = serachParamns.get("title");
        const description = serachParamns.get("description");

        return (
            <div className="w-screen h-screen bg-[#111] p-6 space-y-2">
               <div className="flex justify-center relative">
                    <button onClick={() => navigate(-1)} className="absolute left-0 borrom-0"> 
                        <ChevronLeftIcon className="text-slate-100"/>
                    </button>
                    <Title>Detalhes da tarefa</Title>
                   
               </div>
                <div className="p-6 bg-slate-200 rounded-md shadow">
                    <h1 className="text-slate-600 font-bold text-xl">{title}</h1>
                    <h1 className="text-slate-600">{description}</h1>
                </div>
            </div>
        )
    }

    export default TaskPage;