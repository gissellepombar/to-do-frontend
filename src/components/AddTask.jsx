import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddTask({ tasks, setTasks }) {
    const [task, setTask] = useState("")

    const newTask = {
        "done": false, 
        "task": task
    }

    const handleNewTask = (e) => {
        e.preventDefault();

        fetch(`https://todo-c9-api-gp.web.app/tasks`, {
        method: "POST", 
        headers: { 
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(newTask),
        })
            .then((res) => res.json())
            .then(setTasks)
            .then(() => (setTask('')))
            .catch(err => console.log(err.message))
    }
    
    return(
        <>
        <form onSubmit={handleNewTask}>
            <Form.Group>
                <Form.Label>Task</Form.Label>
                <Form.Control 
                    name="task"
                    type="task" 
                    placeholder="Enter Task"
                    value={task}
                    className="p-3 hover-effect" 
                    onChange={e => setTask(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </form>
        </>
    )
}