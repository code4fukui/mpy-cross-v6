import { compile } from "./index.js";

const prog = `from pybricks.hubs import PrimeHub
from pybricks.pupdevices import Motor, ColorSensor, UltrasonicSensor, ForceSensor
from pybricks.parameters import Button, Color, Direction, Port, Side, Stop
from pybricks.robotics import DriveBase
from pybricks.tools import wait, StopWatch

hub = PrimeHub()
#hub.light.on(Color.RED)
hub.display.off()
hub.display.pixel(1, 1, 100)
wait(1000)
hub.display.pixel(1, 2, 100)
wait(1000)
`;

//const wasmurl = "http://localhost:8880/mpy-cross-v6.wasm";
const wasmurl = "https://code4fukui.github.io/mpy-corss-v6/build/mpy-cross-v6.wasm";
const bin = await compile("main.py", prog, null, wasmurl);
//const bin = await compile("main.py", prog);
console.log(bin.mpy);
