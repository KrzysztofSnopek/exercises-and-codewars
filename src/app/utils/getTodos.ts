"use server";
import { prisma } from "../db";

export default async function getTodos() {
  const todos = await prisma.toDo.findMany();
  return todos;
}
