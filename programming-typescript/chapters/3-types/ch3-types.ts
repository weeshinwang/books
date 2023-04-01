// symbol
let a = Symbol('a');
let b: symbol = Symbol('b');
// let d = a + 'x';

const e = Symbol('e');
const f: unique symbol = Symbol('f');
const fa: unique symbol = Symbol('f');
// let g: unique symbol = Symbol('g');

// let obj: {
//   a: number;
//   b?: string;
//   [c: number]: string;
// };

// index singature
let obj: {
  [x: string]: number;
} = {};

let n: number = obj.something;
let p: { something: number } = obj;
