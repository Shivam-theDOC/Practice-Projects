import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice.js";
import { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setTodo(e.target.value);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    dispatch(addTodo(todo.trim()));
    setTodo("");
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-md">
      <h1 className="text-2xl font-bold text-gray-100 text-center mb-4">
        ➕ Add Todo
      </h1>
      <form
        onSubmit={handleAddTodo}
        className="flex flex-col sm:flex-row items-center gap-3"
      >
        <input
          type="text"
          placeholder="Enter a task..."
          value={todo}
          onChange={handleChange}
          className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
