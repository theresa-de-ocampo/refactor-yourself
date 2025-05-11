function solution(A: number[]): number {
  return A.slice(1).reduce(function (odd: number, current: number) {
    return odd ^ current;
  }, A[0]);
}
