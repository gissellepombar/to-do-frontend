import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";


export default function TaskList({ tasks, setTasks }) {

    useEffect(() => {
        fetch('https://todo-c9-api-gp.web.app/tasks')
            .then(res => res.json())
            .then(setTasks)
            .catch(console.error)
    }, [])

    return (
        <article>
        <div>
            <h1>To-Do List</h1>
        </div>
            {!tasks 
                ? <h2>"Loading..."</h2>
                : <section>
                    {tasks.map((task)=>(
                        <TaskCard  key={task.taskId} task={task}/>
                    ))}
                </section>
            }
        </article>
    )
}