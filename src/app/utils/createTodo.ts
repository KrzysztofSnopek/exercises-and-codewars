"use server";

import { prisma } from "@/app/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function createTodo(data: FormData) {
  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.toDo.create({ data: { title, complete: false } });

  revalidatePath("/todo");
  redirect("/todo");
}
