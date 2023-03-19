"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore: no typing
var mpy_cross_v6_1 = __importDefault(require("./mpy-cross-v6"));
var MpyCross = mpy_cross_v6_1.default;
/**
 * Compiles a MicroPython source code file using mpy-cross.
 * @param fileContents The contents of the .py file to be compile.
 * @param fileName The name of the .py file (including file extension).
 * @param options Command line arguments for mpy-cross.
 * @param wasmPath Path to location of `mpy-cross-v6.wasm`.
 */
function compile(fileName, fileContents, options, wasmPath) {
    return new Promise(function (resolve, reject) {
        try {
            var args = [fileName];
            if (options) {
                args.splice.apply(args, __spreadArrays([0, 0], options));
            }
            MpyCross({
                arguments: args,
                inputFileContents: fileContents,
                callback: function (status, mpy, out, err) {
                    return resolve({ status: status, mpy: mpy, out: out, err: err });
                },
                locateFile: function (path, scriptDirectory) {
                    if (path === 'mpy-cross-v6.wasm' &&
                        wasmPath !== undefined) {
                        return wasmPath;
                    }
                    return scriptDirectory + path;
                },
            });
        }
        catch (err) {
            reject(err);
        }
    });
}
exports.compile = compile;
