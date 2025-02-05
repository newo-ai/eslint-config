import eslintjs from './eslintjs.js'
import typescript from './typescript.js';
import sonar from './sonar.js';
import unicorn from './unicorn.js';
import promise from "./promise.js";
import arrayFunc from './array-func.js';
import importx from './importx.js';
import regexp from './regexp.js';

export default [
    ...eslintjs,
    ...typescript,
    ...sonar,
    ...unicorn,
    ...promise,
    ...arrayFunc,
    ...importx,
    ...regexp,
];