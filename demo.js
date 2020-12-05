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

    const value = __getString(hanoi(3, towerAPtr, towerBPtr, towerCPtr));
    __release(towerAPtr);
    __release(towerBPtr);
    __release(towerCPtr);
    console.log(value);
})();