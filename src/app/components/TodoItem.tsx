"use client";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodoCompletion: (id: string, complete: boolean) => void;
};

export function TodoItem({
  id,
  title,
  complete,
  toggleTodoCompletion,
}: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodoCompletion(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
