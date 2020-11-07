// Object-style
export class Flock {
  public seagulls: number;

  constructor(n: number) {
    this.seagulls = n;
  }

  conjoin(other: Flock) {
    this.seagulls += other.seagulls;
    return this;
  }

  breed(other: Flock) {
    this.seagulls = this.seagulls * other.seagulls;
    return this;
  }
}

// FP style

export type Action = (flockX: number, flockY: number) => number;

// Original names
export const conjoin: Action = (flockX, flockY) => flockX + flockY;
export const breed: Action = (flockX, flockY) => flockX * flockY;

// True identities name
export const add: Action = (x, y) => x + y;
export const multiply: Action = (x, y) => x * y;
