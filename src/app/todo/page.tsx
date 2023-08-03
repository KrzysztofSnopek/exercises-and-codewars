import Link from "next/link";
import { TodoItem } from "../components/TodoItem";
import toggleTodo from "../utils/toggleTodo";
import getTodos from "../utils/getTodos";

export default async function Todo() {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          href="/todo/addNew"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Create new
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodoCompletion={toggleTodo}
            />
          );
        })}
      </ul>
    </>
  );
}
