import Link from "next/link";
import ReturnButton from "../components/ReturnButton";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-center">Effect tasks</h1>
      </header>
      <div>
        <ol className="p-4">
          <li className="p-2 list-decimal">
            <Link href="/effectTasks/transformData">
              Transform data so that you can get rid of unnecessary useEffects
            </Link>
          </li>
        </ol>
      </div>
      <ReturnButton />
    </>
  );
}
