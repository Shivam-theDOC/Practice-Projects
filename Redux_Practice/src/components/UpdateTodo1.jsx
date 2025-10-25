import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todo/todoSlice.js";

const UpdateTodo = ({ id, text, onClearingUpdate }) => {
  const [updatedTodo, setUpdatedTodo] = useState("");
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!updatedTodo.trim()) return;
    dispatch(updateTodo({ id, text: updatedTodo }));
    onClearingUpdate({ id: "", text: "", isOpen: false });
  };

  useEffect(() => {
    if (text) setUpdatedTodo(text);
  }, [text]);

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-sm text-gray-100">
      <h1 className="text-xl font-semibold text-center mb-4">✏️ Update Todo</h1>
      <form onSubmit={handleUpdate} className="flex flex-col gap-3">
        <input
          type="text"
          value={updatedTodo}
          onChange={(e) => setUpdatedTodo(e.target.value)}
          className="px-4 py-2 bg-white/20 rounded-lg text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 py-2 rounded-lg transition text-white"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateTodo;
