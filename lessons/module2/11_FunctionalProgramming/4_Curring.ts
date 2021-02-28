import { curry } from "ramda";

export const add = (x: number) => (y: number): number => x + y;
export const increment = add(1);
export const addTen = add(10);

export const match = curry((what, s) => s.match(what));
export const replace = curry((what, replacement, s) =>
  s.replace(what, replacement)
);
export const filter = curry((f, xs) => xs.filter(f));
export const map = curry((f, xs) => xs.map(f));
