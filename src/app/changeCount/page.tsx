import React from "react";
import { countChangeWays } from "../exercises/changeCount";

export default function ChangeCount() {
  const totalCashValue: number = 300;
  const denominations: number[] = [5, 10, 20, 50, 100, 200, 500];

  countChangeWays(totalCashValue, denominations);
  console.log(countChangeWays(totalCashValue, denominations));

  const jeden = [2, 4, 5];
  const trzy = 3;

  console.log(jeden[0], jeden);

  return (
    <div>
      Total number of ways you can pay the total price is {totalCashValue}
    </div>
  );
}
