import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
    input: "SignUp.js",
    output: {
        file: "dist/SignUp.js",
        format: "iife"
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: "node_modules/**"
        })
    ],
};