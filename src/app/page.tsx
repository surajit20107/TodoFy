"use client"; // to make this client component 
import Skeleton from "react-loading-skeleton";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { MdDelete } from "react-icons/md";
import "react-loading-skeleton/dist/skeleton.css";
import toast, { Toaster } from "react-hot-toast";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function Home() {
  // initial states
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  // fetch todos from local storage when the component mounts
  useEffect(() => {
    setTimeout(() => {
      const todo = localStorage.getItem("todos");
      if (todo) {
        setTodos(JSON.parse(todo));
      }
      setLoading(false);
    }, 100); // simulate server fetching delay
  }, []);

  // fetch todos when the todos array changes
  useEffect(() => {
    if (loading) return;
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, loading]);

  // create new todo by adding it to the todos array and updateing the local storage
  const createTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input || input.trim() === "") return;
    const id = uuid();
    console.log(input);
    const newTodo = {
      id,
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
    toast.success("Task added")
  };

  // toggles done status of todos
  const editTodo = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        toast.success("Task updated")
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  // remove todo from todos array and update local storage
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.error("Task deleted")
  };

  return (
    <>
    <Toaster />
    <div className="mt-2">
      <h1 className="font-bold text-2xl text-center">TodoFy</h1>
      <div>
        <form
          className="flex gap-4 items-center justify-center mt-4"
          onSubmit={createTodo}>
          <input
            type="text"
            placeholder="Add a new task..."
            className="p-2 rounded-md border-2 border-purple-300 outline-none focus:border-purple-500"
            value={input}
            onChange={(e) => setInput(e.target.value)} />
          <div>
            <button
              type="submit"
              className="p-2 rounded-md bg-purple-500 text-white hover:bg-purple-600 hover:shadow-purple-200 transition-all duration-300 ease-in-out">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="mt-4">
        {loading && <Skeleton count={5} />}
        {todos.map((todo) => {
          return (
            <div
              className="flex items-center justify-between p-2 w-full rounded-md bg-purple-50 hover:bg-gray-200 transition-all duration-300 ease-in-out"
              key={todo.id.toString()}>
              <div className="flex gap-4">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => editTodo(todo.id)} />
                <p
                  className={`${todo.completed ? "line-through text-gray-500 text-lg" : "text-lg"}`}>
                  {todo.text || <Skeleton count={1} />}
                </p>
              </div>
              <div>
                <button
                  className="flex itmes-center justify-center"
                  onClick={() => deleteTodo(todo.id)}>
                  <MdDelete className="text-2xl text-red-500 hover:text-red-600 transition-all duration-300 ease-in-out" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
