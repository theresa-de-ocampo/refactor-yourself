# Odd Occurrences

## Task Description

A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

```
  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
```

the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

```typescript
function solution(A: number[]): number;
```

that, given an array `A` consisting of `N` integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

```
  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
```

the function should return 7, as explained in the example above.

Write an **efficient** algorithm for the following assumptions:

- `N` is an odd integer within the range [1..1,000,000];
- each element of array `A` is an integer within the range [1..1,000,000,000];
- all but one of the values in `A` occur an even number of times.

## [Solution v1](./v1.ts)

<table>
  <tr>
    <th>Score</th>
    <td>66%</td>
  </tr>
  <tr>
    <th>Time Complexity</th>
    <td><code>O(n^2)</code></td>
  </tr>
  <tr>
    <th>Space Complexity</th>
    <td><code>O(n)</code></td>
  </tr>
</table>

- Timeout error when the number of elements is at `medium2` (>= 100,003).
- Killed. Hard limit reached: `6.000 sec`.

## [Solution v2](./v2.ts)

<table>
  <tr>
    <th>Score</th>
    <td>100%</td>
  </tr>
  <tr>
    <th>Time Complexity</th>
    <td><code>O(n)</code> or <code>O(n log n)</code></td>
  </tr>
  <tr>
    <th>Space Complexity</th>
    <td><code>O(n)</code></td>
  </tr>
</table>

## [Solution v3](./v3.ts)

<table>
  <tr>
    <th>Score</th>
    <td>100%</td>
  </tr>
  <tr>
    <th>Time Complexity</th>
    <td><code>O(n)</code></code></td>
  </tr>
  <tr>
    <th>Space Complexity</th>
    <td><code>O(1)</code></td>
  </tr>
</table>

### Key Properties of `XOR`

1. `a ^ a = 0` → XORing a number with itself results in 0.
2. `a ^ b = a` → XORing a number with 0 returns the number.
3. XOR is commutative and associative → the order does not matter.

So, when you XOR all elements in the array:

- Every number that appears twice cancels itself out (e.g., `9 ^ 9 = 0`, `3 ^ 3` = 0)
- The number that appears only once remains at the end, because `0 ^ x = x`.

### Walkthrough

If we have:

```typescript
A = [9, 3, 9, 3, 9, 7, 9];
```

Then:

```
9 ^ 3 = 10
10 ^ 9 = 3
3 ^ 3 = 0
0 ^ 9 = 9
9 ^ 7 = 14
14 ^ 9 = 7
```
