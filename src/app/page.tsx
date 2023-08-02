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
        </ul>
      </div>
    </>
  );
}
