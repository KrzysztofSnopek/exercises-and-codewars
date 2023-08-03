"use server";
import { prisma } from "../db";

export default async function toggleTodo(id: string, complete: boolean) {
  await prisma.toDo.update({ where: { id }, data: { complete } });
}
