import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import UpdateTodo from "./UpdateTodo";

const Todos = () => {
  const [update, setUpdate] = useState({ id: "", text: "", isOpen: false });
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(removeTodo(id));
  const clearingUpdate = (payload) => setUpdate(payload);

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-lg">
      <h1 className="text-2xl font-semibold text-white text-center mb-4">
        📝 Todos
      </h1>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-white/10 px-4 py-2 rounded-xl text-gray-200"
          >
            <span>{todo.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setUpdate({ id: todo.id, text: todo.text, isOpen: true })
                }
                className="px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-sm rounded-lg"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="px-3 py-1 bg-red-500 hover:bg-red-600 text-sm rounded-lg"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>

      {update.isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <UpdateTodo
            id={update.id}
            text={update.text}
            onClearingUpdate={clearingUpdate}
          />
        </div>
      )}
    </div>
  );
};

export default Todos;
