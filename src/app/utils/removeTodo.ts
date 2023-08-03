"use server";
import { prisma } from "../db";

export default async function removeTodo(id: string) {
  await prisma.toDo.delete({ where: { id: id } });
}
