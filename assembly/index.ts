// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function isPrime(x: u32): bool {
  if (x < 2) {
      return false;
  }

  for (let i: u32 = 2; i < x; i++) {
      if (x % i === 0) {
          return false;
      }
  }

  return true;
}

export function hanoi(numPegs: i32, towerA: string, towerB: string, towerC: string): string {
  if (numPegs > 0) {
    return concat(concat(hanoi(numPegs - 1, towerA, towerC, towerB), concat(towerA, towerB)), hanoi(numPegs - 1, towerC, towerB, towerA));
  }
  return ";";
}

function concat(a: string, b: string): string {
  return a + " " + b;
}