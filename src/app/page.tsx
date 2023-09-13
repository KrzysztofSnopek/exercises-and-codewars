import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-center">Hello World</h1>
      </header>
      <div>
        <ol className="p-4">
          <li className="p-2 list-decimal">
            <Link href="/todo">Checking next.js out with todo list</Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/changeCount">
              Function counting amount of possible change outcomes given the
              number and an array of coin denominations
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/refTasks">
              Completing tasks with useRef as a main topic
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/effectTasks">
              Refactoring code to get rid of useEffects
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/hookTasks">Reusing Logic with Custom Hooks</Link>
          </li>
        </ol>
      </div>
    </>
  );
}
