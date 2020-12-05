var webassembly = require('webassembly');

async function loadWasm() {
    var module = await webassembly.load("math.wasm");
    window.wasmExports = module.exports;
    console.log(window.wasmExports);
    console.log(window.wasmExports.add(2, 2));
    console.log(window.wasmExports.subtract(2, 2));
}

loadWasm();

