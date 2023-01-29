// Задание второго уровня 1
// Есть объединение (юнион) типов заказов в различных состояниях
// и функция filterOnlyInitialAndInWorkOrder которая принимает заказы в любых состояниях
// А возвращает только initial и inWork
// Нужно заменить FIXME на правильный тип вычисленный на основе Order

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = any;

type InitialOrder = {
  state: "initial";
  sum: number;
};

type InWorkOrder = {
  state: "inWork";
  sum: number;
  workerId: number;
};

type BuyingSuppliesOrder = {
  state: "buyingSupplies";
  sum: number;
  workerId: number;
  suppliesSum: number;
};

type ProducingOrder = {
  state: "producing";
  sum: number;
  workerId: number;
  suppliesSum: number;
  produceEstimate: Date;
};

type FullfilledOrder = {
  state: "fullfilled";
  sum: number;
  workerId: number;
  suppliesSum: number;
  produceEstimate: Date;
  fullfillmentDate: Date;
};

type Order =
  | InitialOrder
  | InWorkOrder
  | BuyingSuppliesOrder
  | ProducingOrder
  | FullfilledOrder;

type InitialOrInWorkOrder = InitialOrder | InWorkOrder;

export const filterOnlyInitialAndInWorkOrder = (
  order: Order
): InitialOrInWorkOrder | null => {
  if (order.state === "initial" || order.state === "inWork") {
    return order;
  }

  return null;
};
