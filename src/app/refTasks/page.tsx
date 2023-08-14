import Link from "next/link";
import ReturnButton from "../components/ReturnButton";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-center">Hello World</h1>
      </header>
      <div>
        <ol className="p-4">
          <li className="p-2 list-decimal">
            <Link href="/refTasks/brokenChatInput">Broken chat input</Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/refTasks/failedRender">
              Fixing a component failing to re-render
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/refTasks/fixDebouncing">
              Fixing broken debounce buttons
            </Link>
          </li>
        </ol>
      </div>
      <ReturnButton />
    </>
  );
}
