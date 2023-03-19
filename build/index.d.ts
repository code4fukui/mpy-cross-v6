export interface CompileResult {
    /**
     * The mpy-cross program exit code.
     */
    status: number;
    /**
     * The compiled .mpy file on success, otherwise undefined.
     */
    mpy?: Uint8Array;
    /**
     * The captured stdout.
     */
    out: string[];
    /**
     * The captured stderr.
     */
    err: string[];
}
/**
 * Compiles a MicroPython source code file using mpy-cross.
 * @param fileContents The contents of the .py file to be compile.
 * @param fileName The name of the .py file (including file extension).
 * @param options Command line arguments for mpy-cross.
 * @param wasmPath Path to location of `mpy-cross-v6.wasm`.
 */
export declare function compile(fileName: string, fileContents: string, options?: string[], wasmPath?: string): Promise<CompileResult>;
//# sourceMappingURL=index.d.ts.map