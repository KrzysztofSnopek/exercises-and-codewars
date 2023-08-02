import Link from "next/link";
import React from "react";
import { prisma } from "../db";

export default async function todo() {
  const todos = await prisma.toDo.findMany();
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
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </>
  );
}
