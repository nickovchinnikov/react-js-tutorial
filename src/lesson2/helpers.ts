export const isNumber = (item: string): boolean =>
  !isNaN(Number(item)) && item !== "";
export const hasBrackets = (item: string): boolean => {
  return item.includes("(") || item.includes(")");
};
