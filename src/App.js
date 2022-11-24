import TodoList from './Components/TodoList';
import './App.css';
import Context from './Context/Context';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Context>
          <TodoList />
        </Context>
      </header>
    </div>
  );
}

export default App;
