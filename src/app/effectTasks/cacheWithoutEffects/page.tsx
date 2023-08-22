"use client";

import { useState, useEffect, useMemo } from "react";
import { initialTodos, createTodo, getVisibleTodos } from "./todos.js";
import { Todo } from "../transformData/page.jsx";

// In this example, filtering the todos was extracted into a separate function called getVisibleTodos(). This function contains a console.log() call inside of it which helps you notice when it’s being called. Toggle “Show only active todos” and notice that it causes getVisibleTodos() to re-run. This is expected because visible todos change when you toggle which ones to display.

// Your task is to remove the Effect that recomputes the visibleTodos list in the TodoList component. However, you need to make sure that getVisibleTodos() does not re-run (and so does not print any logs) when you type into the input.

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const [text, setText] = useState("");

  const visibleTodos = useMemo(
    () => getVisibleTodos(todos, showActive),
    [todos, showActive]
  );

  function handleAddClick() {
    setText("");
    setTodos([...todos, createTodo(text)]);
  }

  return (
    <>
      <div className="flex flex-col">
        <label>
          <input
            type="checkbox"
            checked={showActive}
            onChange={(e) => setShowActive(e.target.checked)}
          />
          Show only active todos
        </label>
        <div className="w-1/9">
          <input
            className="m-2"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleAddClick}>Add</button>
        </div>
      </div>
      <ul>
        {visibleTodos.map((todo: Todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}
