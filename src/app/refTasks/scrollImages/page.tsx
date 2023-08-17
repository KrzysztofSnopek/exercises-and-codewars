"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";

// This image carousel has a “Next” button that switches the active image. Make the gallery scroll horizontally to the active image on click. You will want to call scrollIntoView() on the DOM node of the active image:

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const imageRef = useRef<any>(null);

  function scrollToNextKitten() {
    flushSync(() => {
      if (index < catList.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    });

    if (imageRef.current) {
      imageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }
  return (
    <>
      <nav>
        <button
          className="p-2 mb-2 border border-slate-300 text-slate-300 px-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          onClick={scrollToNextKitten}
        >
          Next
        </button>
      </nav>
      <div>
        <ul className="grid grid-flow-col overflow-hidden">
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              ref={index === i ? imageRef : null}
              className={`w-60 p-2 ${
                index === i ? "bg-slate-200" : "bg-slate-700"
              }`}
            >
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
