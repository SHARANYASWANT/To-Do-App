import React, {useState, useEffect} from "react";

function ToDoList(){
    
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [isDone, setIsDone] = useState(false);

    function inputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const NewTasks = tasks.filter((_, i) => i !== index);
        setTasks(NewTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const NewTasks = [...tasks];
            [NewTasks[index], NewTasks[index-1]] = [NewTasks[index-1], NewTasks[index]]
            setTasks(NewTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const NewTasks = [...tasks];
            [NewTasks[index], NewTasks[index+1]] = [NewTasks[index+1], NewTasks[index]]
            setTasks(NewTasks);
        }
    }

    function completed(){
        setIsDone(!isDone);
    }

    return(
        <>
            <body>
                <div className="to-do-list">
                    <h1>To-Do App</h1>
                    <div>
                        <input type="text" placeholder="Add a new task..." onChange={inputChange} value={newTask} />
                        <button className="add-button" onClick={addTask}>Add Task</button>
                    </div>
                    <div className="display">
                        <ol>
                            {tasks.map((task, index) => 
                                <li key={index}>
                                    <span className="text">{isDone === true ? <s className="c-text">{task}</s> : <span className="text">{task}</span>}</span>
                                    <input type="checkbox" onClick={completed} />
                                    <button className="up-button" onClick={() => moveTaskUp(index)}>👆</button>
                                    <button className="up-button" onClick={() => moveTaskDown(index)}>👇</button>
                                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                                </li>
                            )}
                        </ol>
                    </div>
                </div>
            </body>
        </>
    );
}

export default ToDoList