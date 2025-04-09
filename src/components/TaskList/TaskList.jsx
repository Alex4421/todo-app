import TaskItem from './TaskItem';
import './styles.css';

const TaskList = ({ tasks, setTasks }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </ul>
  );
};

export default TaskList;