import { TodoList } from "@/components/TodoList";
import { initialTodos } from "@/initialState";
import { Todo } from "@/types";
import React from "react";
import { getDictionary } from "../dictionaries";
import Link from "next/link";

const MOCKED_RESPONSE_TIME = 1000;

const getInitialTodoState = async () => {
  const mockTodosCall = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(initialTodos);
      }, MOCKED_RESPONSE_TIME)
    );
  const initialState = (await mockTodosCall()) as Todo[];
  return initialState;
};
export default async function Home({
  params: { lang },
}: {
  params: { lang: "en" | "es" };
}) {
  const dictionary = await getDictionary(lang);
  const todos = await getInitialTodoState();
  return (
    <>
      <nav className="flex align-center justify-center my-2">
        <h4>{dictionary.change_lang}: </h4>
        <Link href="/es">
          <span className="py-1 m-2 px-4 bg-red-200">{dictionary.spanish}</span>
        </Link>
        <span> |</span>
        <Link href="/en">
          <span className="py-1 m-2 px-4 bg-blue-200">
            {dictionary.english}
          </span>
        </Link>
      </nav>
      <main className="flex flex-col items-center justify-center p-24">
        <h1 className="text-2xl"> {dictionary.title} </h1>
        <p className="text-gray-600"> {dictionary.cue} </p>
        <TodoList initialTodos={todos} dictionary={dictionary} />
      </main>
    </>
  );
}
