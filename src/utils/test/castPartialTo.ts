// https://gist.github.com/navix/6c25c15e0a2d3cd0e5bce999e0086fc9
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>;
};

export function castPartialTo<T>(param: DeepPartial<T>): T {
  return (param as unknown) as T;
}
