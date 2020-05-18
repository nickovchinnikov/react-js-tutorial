export const isNotEmpty = (x: number | string | boolean) =>
  typeof x !== "number" && typeof x !== "boolean" ? !!x : true;

export const isAlphanumeric = (x: string) => /^[a-zA-Z0-9_]*$/.test(x);
