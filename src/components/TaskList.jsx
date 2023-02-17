import { useState, useEffect } from "react";


export default function TaskList() {
    const [tasks, setTasks] = useState();

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
                        <div key={task.taskId}>
                            {task.task}
                        </div>
                    ))}
                </section>
            }
        </article>
    )
}