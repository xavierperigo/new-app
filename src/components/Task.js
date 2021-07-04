const Task = ({ task, onToggle }) => {
    return (
        <div
            className={`task ${task.completed && 'completed'}`}
            onDoubleClick={() => onToggle(task.id)}
        >
            <h3>{task.text}</h3>
        </div>
    )
}

export default Task
