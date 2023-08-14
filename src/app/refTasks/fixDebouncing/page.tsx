"use client";

import ReturnButton from "@/app/components/ReturnButton";

function DebouncedButton({ onClick, children }: any) {
  let timeoutID: any;
  return (
    <button
      className="p-2 border border-slate-300 text-slate-300 px-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
      onClick={() => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
          onClick();
        }, 1000);
      }}
    >
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col">
        <DebouncedButton onClick={() => alert("Spaceship launched!")}>
          Launch the spaceship
        </DebouncedButton>
        <DebouncedButton onClick={() => alert("Soup boiled!")}>
          Boil the soup
        </DebouncedButton>
        <DebouncedButton onClick={() => alert("Lullaby sung!")}>
          Sing a lullaby
        </DebouncedButton>
      </div>
      <ReturnButton />
    </>
  );
}
