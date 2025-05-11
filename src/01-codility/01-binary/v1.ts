import readline from "node:readline";

export default function solution(n: number) {
  const binary = n.toString(2);

  let startIndex: number | null = null;
  let endIndex: number | null = null;
  const gaps: number[] = [];

  for (let i = 0; i < binary.length; i++) {
    const bit = binary[i];

    if (bit === "1") {
      if (startIndex === null) {
        startIndex = i;
      } else {
        endIndex = i;
        gaps.push(endIndex - startIndex - 1);

        // Reset markers
        startIndex = null;
        endIndex = null;
      }
    }
  }

  return _getMax(gaps);
}

function _getMax(numbers: number[]): number {
  let largest = 0;

  for (const n of numbers) {
    if (n > largest) {
      largest = n;
    }
  }

  return largest;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", (input: string) => {
  const number = Number.parseInt(input, 10);
  const answer = solution(number);
  console.log(answer);
  rl.close();
});
