import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="bg-black text-white">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
