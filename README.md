# @pybricks/mpy-cross-v6

JavaScript package for distributing MicroPython's `mpy-cross` with ABI v6
(compiled to Web Assembly using Emscripten).

## Usage

```js
import { compile } from "https://code4fukui.github.io/mpy-cross-v6/build/index.js";

const prog = `print(15)`;

const wasmurl = "https://code4fukui.github.io/mpy-corss-v6/build/mpy-cross-v6.wasm";
const bin = await compile("main.py", prog, null, wasmurl);
console.log(bin.mpy);
```
