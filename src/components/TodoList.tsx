"use client";

import { Todo } from "@/types";
import { useRef, useState } from "react";

export const TodoList = ({
  initialTodos,
  dictionary,
}: {
  initialTodos: Todo[];
  dictionary: Record<string, string>;
}) => {
  const [todos, setTodos] = useState(initialTodos);

  const input = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    if (!input.current?.value) return;
    const newTodo: Todo = {
      id: todos.length + 1,
      title: input.current.value,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleChangeTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="m-6 flex justify-start">
            <input
              id={todo.id.toString()}
              type="checkbox"
              defaultChecked={todo.completed}
              onClick={() => {
                handleChangeTodo(todo.id);
              }}
            />
            <label
              htmlFor={todo.id.toString()}
              className={`text-lg inline m-2 ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.title}
            </label>
          </li>
        ))}
      </ul>
      <input
        className="m-2 border-b-2 border-black inline"
        type="text"
        placeholder={dictionary.newTodo}
        ref={input}
      />
      <button
        className="py-2 px-4 bg-blue-400 active:bg-blue-700 text-white rounded-lg"
        onClick={handleAddTodo}
      >
        {dictionary.add}
      </button>
    </>
  );
};
