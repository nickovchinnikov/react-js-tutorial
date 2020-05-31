// https://en.wikipedia.org/wiki/Pyramid_of_doom_(programming)
// https://stackoverflow.com/a/28032438/10828885

export function spawn(generator: () => Generator<any>) {
  return function (...args: any): Promise<any> {
    /* eslint-disable */
    // @ts-ignore
    const iter = generator.apply(this, args);

    return Promise.resolve().then(function onValue(
      lastValue: any
    ): Promise<any> {
      const result = iter.next(lastValue);

      const done = result.done;
      const value = result.value;

      if (done) return value; // generator done, resolve promise
      return Promise.resolve(value).then(onValue, iter.throw.bind(iter)); // repeat
    });
  };
}
