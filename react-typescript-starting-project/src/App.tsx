import NewTodo from './compoenents/NewTodo';
import Todos from './compoenents/Todos';
import TodoContextProvider from './store/todo-context';

function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
