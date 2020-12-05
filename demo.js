export function hanoiJS(numPegs, towerA, towerB, towerC) {
    if (numPegs > 0) {
      return concat(concat(hanoiJS(numPegs - 1, towerA, towerC, towerB), concat(towerA, towerB)), hanoiJS(numPegs - 1, towerC, towerB, towerA));
    }
    return ";";
  }
  
  function concat(a, b) {
    return a + " " + b;
  }

(async () => {
    const loader = require("@assemblyscript/loader");
    const importObject = {
        env: {
            abort(_msg, _file, line, column) {
                console.error("abort called at index.ts:" + line + ":" + column);
            }
        }
    };
    const module = await loader.instantiate(
        fetch("build/optimized.wasm"),
        importObject
    );
    
    const { __newString, __getString, __retain, __release, __new } = module.exports;

    const { isPrime, hanoi } = module.instance.exports;
    const towerA = "tower a";
    const towerB = "tower b";
    const towerC = "tower c";

    const towerAPtr = __retain(__newString(towerA));
    const towerBPtr = __retain(__newString(towerB));
    const towerCPtr = __retain(__newString(towerC));

    const result = document.querySelector("#result");
    document.querySelector("#prime-checker").addEventListener("submit", event => {
        event.preventDefault();
        result.innerText = "";
        const number = event.target.elements.number.value;
        result.innerText = `${number} is ${isPrime(number) ? '' : 'not '}prime.`;
    });

    var t0 = performance.now();
    let value = __getString(hanoi(20, towerAPtr, towerBPtr, towerCPtr));
    var t1 = performance.now();
    __release(towerAPtr);
    __release(towerBPtr);
    __release(towerCPtr);
    console.log(value);
    console.log("Time Taken: " + (t1 - t0) + " milliseconds");

    var t0 = performance.now();
    value = hanoiJS(20, "tower a", "tower b", "tower c");
    var t1 = performance.now();
    console.log(value);
    console.log("Time Taken: " + (t1 - t0) + " milliseconds");
})();