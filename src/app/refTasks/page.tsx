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
            <Link href="/refTasks"></Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/refTasks"></Link>
          </li>
        </ol>
      </div>
      <ReturnButton />
    </>
  );
}
