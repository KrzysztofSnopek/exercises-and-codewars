export function countChangeWays(money: number, coins: number[]): number {
  if (money < 0 || coins.length === 0) return 0;
  else if (money === 0) return 1;
  else
    return (
      countChangeWays(money - coins[0], coins) +
      countChangeWays(money, coins.slice(1))
    );
}
