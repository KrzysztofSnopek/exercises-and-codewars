"use client";

import removeTodo from "../utils/removeTodo";

export type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodoCompletion: (id: string, complete: boolean) => void;
};

async function handleRemove(id: string) {
  await removeTodo(id);
}

export function TodoItem({
  id,
  title,
  complete,
  toggleTodoCompletion,
}: TodoItemProps) {
  return (
    <li className="group flex justify-between p-2 w-full items-center">
      <div>
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={(e) => toggleTodoCompletion(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="ml-2 p-2 cursor-pointer peer-checked:line-through peer-checked:text-slate-500 group-hover:border group-hover:border-slate-300 group-hover:rounded"
        >
          {title}
        </label>
      </div>
      <button
        onClick={() => handleRemove(id).then(() => window.location.reload())}
        className="border border-slate-300 text-slate-300 px-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
      >
        Remove
      </button>
    </li>
  );
}
