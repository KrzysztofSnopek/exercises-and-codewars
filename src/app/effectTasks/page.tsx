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
          <li className="p-2 list-decimal">
            <Link href="/effectTasks/cacheWithoutEffects">
              Cache a calculation without Effects
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/effectTasks/formWithoutEffects">
              Submit a form without Effects
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/effectTasks/fixReconnecting">
              Fix reconnecting on keystroke
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/effectTasks/switchSynchro">
              Switching synchronization on and off
            </Link>
          </li>
        </ol>
      </div>
      <ReturnButton />
    </>
  );
}
