function solution(A: number[]): number {
  const uniqueValues = [...new Set(A)];
  let unpaired = null;

  for (const uniqueValue of uniqueValues) {
    const occurrences = A.filter((n) => n === uniqueValue);
    if (occurrences.length % 2) {
      unpaired = uniqueValue;
      break;
    }
  }

  if (unpaired === null) {
    throw new Error("Invalid input, all elements have matching pairs.");
  }

  return unpaired;
}
