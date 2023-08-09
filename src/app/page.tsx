import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-center">Hello World</h1>
      </header>
      <div>
        <ul>
          <li>
            <Link href="/todo">Checking next.js out with todo list</Link>
          </li>
          <li>
            <Link href="/changeCount">
              Function counting amount of possible change outcomes given the
              number and an array of coin denominations
            </Link>
          </li>
          <li>
            <Link href="/refTasks">
              Completing tasks with useRef as a main topic
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
