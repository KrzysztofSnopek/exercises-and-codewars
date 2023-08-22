"use client";

// The TodoList below displays a list of todos. When the “Show only active todos” checkbox is ticked, completed todos are not displayed in the list. Regardless of which todos are visible, the footer displays the count of todos that are not yet completed.

// Simplify this component by removing all the unnecessary state and Effects.

import { useState, useEffect } from "react";
import { initialTodos, createTodo } from "./todos.js";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);

  const activeTodos = todos.filter((todo) => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;

  return (
    <>
      <div className="flex flex-col w-1/9">
        <label className="p-2">
          <input
            type="checkbox"
            checked={showActive}
            onChange={(e) => setShowActive(e.target.checked)}
          />
          Show only active todos
        </label>
        <NewTodo onAdd={(newTodo: Todo) => setTodos([...todos, newTodo])} />
      </div>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id} className="pl-2">
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer className="p-2">{activeTodos.length} todos left</footer>
    </>
  );
}

function NewTodo({ onAdd }: any) {
  const [text, setText] = useState("");

  function handleAddClick() {
    setText("");
    onAdd(createTodo(text));
  }

  return (
    <div className="flex">
      <input
        className="m-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}
