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
    <div className="bg-gray-800 p-6 rounded-xl shadow-2xl w-full max-w-sm text-gray-200">
      <h1 className="text-xl font-semibold mb-4 text-center">✏️ Update Todo</h1>
      <form onSubmit={handleUpdate} className="flex flex-col gap-3">
        <input
          type="text"
          value={updatedTodo}
          onChange={(e) => setUpdatedTodo(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateTodo;
