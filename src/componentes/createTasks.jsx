    import { useState } from "react";
    import Input from "./Input";

    function CreateTask({onAddTask}){
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("")
 
        return (
            <div className="bg-slate-200 p-6 rounded-md shadow flex flex-col space-y-4 ">
                <Input
                    type="text" 
                    placeholder="Digite o titulo da tarefa"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                 />

                <Input 
                    type="text" 
                    placeholder="Digite a descrição da tearefa"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />

                <button 
                    onClick={() => {
                        if(!title.trim() | !description.trim()){
                            return alert("Não é possivel adicionar uma tareda em branco!")
                        }
                        onAddTask(title, description)
                        setTitle("");
                        setDescription("");
                    }}
                    className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"> Adicionar
                </button>
            </div>
        )
    }

    export default CreateTask;