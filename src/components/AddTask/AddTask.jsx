import { useState } from 'react';
import './styles.css';

const AddTask = ({ tasks, setTasks }) => {
  const [value, setValue] = useState('');

  const addTask = () => {
    if (!value.trim()) return;
    setTasks([...tasks, {
      id: Date.now(),
      text: value.trim(),
      completed: false
    }]);
    setValue('');
  };

  return (
    <div className="add-task">
      <input 
        value={value}
        placeholder='Добавить задачу...' 
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && addTask()} 
      />
      <button onClick={addTask}>Добавить</button>
    </div>
  );
};

export default AddTask;