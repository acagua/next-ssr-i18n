export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <h1 className="text-2xl"> Todo List </h1>
      <p className="text-gray-600"> Click to mark as done or uncomplete </p>
      <ul>
        <li className="m-6 flex justify-start">
          <input id="id" type="checkbox" />
          <label htmlFor="id" className={"text-lg inline m-"}>
            Todo Title
          </label>
        </li>
      </ul>
    </main>
  );
}
