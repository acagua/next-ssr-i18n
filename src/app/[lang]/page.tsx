import { TodoList } from "@/components/TodoList";
import { initialTodos } from "@/initialState";
import { Todo } from "@/types";
import React from "react";
import { getDictionary } from "../dictionaries";

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
    <main className="flex flex-col items-center justify-center p-24">
      <h1 className="text-2xl"> {dictionary.title} </h1>
      <p className="text-gray-600"> {dictionary.cue} </p>
      <TodoList initialTodos={todos} dictionary={dictionary} />
    </main>
  );
}
