import Link from "next/link";
import React from "react";
import createTodo from "@/app/utils/createTodo";

export default function AddNew() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Create new</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border bg-slate-700 border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-600 focus-within:bg-slate-600 outline-none"
        />
        <div className="flex gap-2 justify-end">
          <Link
            href="/todo"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
