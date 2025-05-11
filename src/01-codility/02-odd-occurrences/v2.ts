function solution(A: number[]): number {
  const tally = new Map<number, number>();
  let unpaired = null;

  for (const number of A) {
    tally.set(number, (tally.get(number) ?? 0) + 1);
  }

  for (const [number, count] of tally) {
    if (count % 2) {
      unpaired = number;
    }
  }

  if (unpaired === null) {
    throw new Error("Invalid input, all elements have matching pairs.");
  }

  return unpaired;
}
