  import { useEffect, useState } from "react"
  import CreateTask from "./componentes/createTasks"
  import ListTasks from "./componentes/listTasks"
  import { v4 } from "uuid";
  import Title from "./componentes/title";

  function App(){
    const [tasks, setTasks] = useState(
      JSON.parse(localStorage.getItem("tasks")) || []
    );

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])


    useEffect(() => {

      const fetchTasks = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=7",
          {
            method: "Get",
          }
        );
        const data = await response.json();
        setTasks(data);
      }
      
      fetchTasks();
    }, [])



    function onTaskClick(taskId){
      let newTasks = tasks.map((task)=> {
        if(task.id === taskId){
          return { ...task, isCompleted: !task.isCompleted};
        };
        return task;
      });
      setTasks(newTasks);
    };

    function onDeleteTask(taskId){
      let newTasks = tasks.filter((task) => task.id != taskId)
      setTasks(newTasks);
    }

    function onAddTask(title, description){
      let newTask = {
        id: v4(),
        title: title,
        description: description,
        isCompleted: false
      }
      setTasks([...tasks, newTask]);
    }

    return (
      <div className="max-w-screen min-h-screen bg-[#111] flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <Title >Gerenciador de Tarefas</Title>
          <CreateTask onAddTask={onAddTask}/>
          <ListTasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTask={onDeleteTask}/>
        </div>
      </div>
    )
  }

  export default App