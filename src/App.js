import './App.css';
import ToDo from './components';
import { ToDoProvider } from './context/ToDoContext';

function App() {
  return (
    <div className="App">
      <ToDoProvider>
        <ToDo/>
      </ToDoProvider>  
    </div>
  );
}

export default App;
