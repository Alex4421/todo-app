import { useState } from 'react';
import editIcon from '../../image/edit.png';
import delIcon from '../../image/del.png';
import './styles.css';

const TaskItem = ({ task, tasks, setTasks }) => {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditValue(task.text);
  };

  const saveEdit = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, text: editValue.trim()} : task
    ));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      
      {editingId === task.id ? (
        <div className="edit-mode">
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            autoFocus
          />
          <button onClick={() => saveEdit(task.id)}>Сохранить</button>
          <button onClick={cancelEdit}>Отмена</button>
        </div>
      ) : (
        <span className="task-text">{task.text}</span>
      )}
      
      <div className="task-actions">
        {editingId !== task.id && (
          <button 
            className="edit-btn"
            onClick={() => startEditing(task)}
            title="Редактировать"
          >
            <img src={editIcon} alt="edit" />
          </button>
        )}
        <button 
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
          title="Удалить"
        >
          <img src={delIcon} alt="delete" />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;