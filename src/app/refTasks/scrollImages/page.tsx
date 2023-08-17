"use client";

import { useRef, useState } from "react";

// This image carousel has a “Next” button that switches the active image. Make the gallery scroll horizontally to the active image on click. You will want to call scrollIntoView() on the DOM node of the active image:

export default function CatFriends() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <nav>
        <button
          className="p-2 mb-2 border border-slate-300 text-slate-300 px-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          onClick={() => {
            if (index < catList.length - 1) {
              setIndex(index + 1);
            } else {
              setIndex(0);
            }
          }}
        >
          Next
        </button>
      </nav>
      <div>
        <ul className="">
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

type kitten = {
  id: number;
  imageUrl: string;
};

const catList: kitten[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}
