// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = Exclude<OrderState, "buyingSupplies" | "producing">;

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];
// Hint: type guards
export const getUserOrderStates = (orderStates: readonly OrderState[]): FIXME[] =>
  orderStates.filter(
    (state): state is FIXME => state !== "buyingSupplies" && state !== "producing"
  );