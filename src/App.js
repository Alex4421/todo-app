import { useState} from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  


  return (
    <div className="app-container">
      <main className="main-content">
        <AppHeader />
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer tasks={tasks} />
    </div>
  );
}

export default App;