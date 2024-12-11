"use client";

import { addTodo, deleteTodo, getTodos, updateTodo } from "@/utils/indexedDB";
import { CheckCircle, Circle, PlusCircle, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const fetchedTodos = await getTodos();
    setTodos(fetchedTodos);
  };

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    await addTodo({ title: newTodo, completed: false });
    setNewTodo("");
    fetchTodos();
  };

  const handleToggleTodo = async (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      await updateTodo(id, { completed: !todo.completed });
      fetchTodos();
    }
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Todo List</h1>
        <form onSubmit={handleAddTodo} className="mb-6">
          <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo"
              className="flex-grow p-3 bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white p-3 hover:bg-indigo-600 transition-colors duration-300"
            >
              <PlusCircle size={24} />
            </button>
          </div>
        </form>
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-50 rounded-lg p-3 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => todo.id && handleToggleTodo(todo.id)}
                  className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
                >
                  {todo.completed ? (
                    <CheckCircle size={24} className="text-green-500" />
                  ) : (
                    <Circle size={24} />
                  )}
                </button>
                <span
                  className={`text-lg ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  {todo.title}
                </span>
              </div>
              <button
                onClick={() => todo.id && handleDeleteTodo(todo.id)}
                className="text-red-400 hover:text-red-600 transition-colors duration-300"
              >
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
