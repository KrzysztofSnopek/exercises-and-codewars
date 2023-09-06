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
          <li className="p-2 list-decimal">
            <Link href="/effectTasks/staleValueBug">
              Investigating a stale value bug
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/effectTasks/fixConnectionSwitch">
              Fix a connection switch
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/effectTasks/populateBoxes">
              Populate a chain of boxes
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/effectTasks/fixVariable">
              Fix a variable that doesn't update
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/effectTasks/freezingCounter">
              Fix a freezing counter
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/effectTasks/fixNonAdjustableDelay">
              Fix a non-adjustable delay
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/effectTasks/fixDelayedNotification">
              Fix a delayed notification
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/effectTasks/fixResettingInterval">
              Fix a resetting interval
            </Link>
          </li>
          <li className="p-2 list-decimal">
            <Link href="/effectTasks/fixRetriggeringAnimation">
              Fix a retriggering animation
            </Link>
          </li>
        </ol>
      </div>
      <ReturnButton />
    </>
  );
}
