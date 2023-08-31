"use client";

import { useState, useEffect } from "react";
import { fetchData } from "./api.ts";
import ReturnButton from "@/app/components/ReturnButton.tsx";

// In this example, there are two select boxes. One select box lets the user pick a planet. Another select box lets the user pick a place on that planet. The second box doesn’t work yet. Your task is to make it show the places on the chosen planet.

// Look at how the first select box works. It populates the planetList state with the result from the "/planets" API call. The currently selected planet’s ID is kept in the planetId state variable. You need to find where to add some additional code so that the placeList state variable is populated with the result of the "/planets/" + planetId + "/places" API call.

// If you implement this right, selecting a planet should populate the place list. Changing a planet should change the place list.

export type Planet = {
  id: string;
  name: string;
};

export type Place = {
  id: string;
  name: string;
};

export default function Page() {
  const [planetList, setPlanetList] = useState<Planet[]>([]);
  const [planetId, setPlanetId] = useState("");

  const [placeList, setPlaceList] = useState<Place[]>([]);
  const [placeId, setPlaceId] = useState("");

  useEffect(() => {
    let ignore = false;
    fetchData("/planets").then((result: any) => {
      if (!ignore) {
        console.log("Fetched a list of planets.");
        setPlanetList(result);
        setPlanetId(result[0].id); // Select the first planet
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <label>
        Pick a planet:{" "}
        <select
          value={planetId}
          onChange={(e) => {
            setPlanetId(e.target.value);
          }}
        >
          {planetList.map((planet) => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Pick a place:{" "}
        <select
          value={placeId}
          onChange={(e) => {
            setPlaceId(e.target.value);
          }}
        >
          {placeList.map((place) => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
      </label>
      <hr />
      <p>
        You are going to: {placeId || "???"} on {planetId || "???"}{" "}
      </p>
      <ReturnButton />
    </>
  );
}
