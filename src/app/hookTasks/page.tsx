import Link from "next/link";
import ReturnButton from "../components/ReturnButton";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-center text-xl">Effect tasks</h1>
      </header>
      <div>
        <ol className="p-4">
          <li className="p-2 list-decimal">
            <Link href="/hookTasks/extractCounterHook">
              Extract a useCounter Hook
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/hookTasks/makeDelayConfigurable">
              Make the counter delay configurable
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/hookTasks/extractUseInterval">
              Extract useInterval out of useCounter
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/hookTasks/fixResettingInterval">
              Fix a resetting interval
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/hookTasks/implementStaggeringMovement">
              Implement a staggering movement
            </Link>
          </li>
        </ol>
      </div>
      <ReturnButton />
    </>
  );
}
