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
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-lg">
      <h1 className="text-2xl font-semibold text-white text-center mb-4">
        ✨ Add Todo
      </h1>
      <form
        onSubmit={handleAddTodo}
        className="flex flex-col sm:flex-row items-center gap-3"
      >
        <input
          type="text"
          placeholder="Add something..."
          value={todo}
          onChange={handleChange}
          className="flex-1 px-4 py-2 rounded-xl bg-white/20 text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
