export default function TaskCard({ data, toggleDone }) {
    
    const { task, done, tasksID } = data;

    const handleButtonClick = () => {
        toggleDone(data);
      };

    return (
        <div>
            <button style={done ? { color: 'red' } : { color: 'blue' }} onClick={handleButtonClick}>{data.task}</button>
            {/* <p style={{`${done ? color: "red" : color: "blue"}2}}>{task.task}</p> */}
            {/* <p style={done ? { color: 'red' } : { color: 'blue' }}>{data.task}</p> */}
            {/* <p >{data.task}</p> */}
        </div >
    )
}
