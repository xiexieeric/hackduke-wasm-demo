var webassembly = require('webassembly');

async function loadWasm() {
    var module = await webassembly.load("math.wasm");
    window.wasmExports = module.exports;
}

loadWasm();

