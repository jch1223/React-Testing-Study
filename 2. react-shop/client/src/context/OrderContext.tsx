import { createContext, ReactChild, useEffect, useState } from "react";
import { OrderType } from "../components/Order/Type";

const pricePerItem = {
  products: 1000,
  options: 500,
};

function calculateSubtotal(orderType: OrderType, orderCounts: OrderCounts) {
  let optionCount = 0;

  for (const count of orderCounts[orderType].values()) {
    optionCount += count;
  }

  return optionCount * pricePerItem[orderType];
}

interface OrderContextProviderProps {
  children: ReactChild;
}

type OrderCounts = {
  [key in OrderType]: Map<string, number>;
};

export interface OrderDatas extends OrderCounts {
  totals: { products: number; options: number; total: number };
}

export const OrderContext = createContext<
  | [
      OrderDatas,
      (itemName: string, newItemCount: number, orderType: OrderType) => void,
      () => void
    ]
  | []
>([]);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderCounts, setOrderCounts] = useState<OrderCounts>({
    products: new Map(),
    options: new Map(),
  });

  const [totals, setTotals] = useState({
    products: 0,
    options: 0,
    total: 0,
  });

  useEffect(() => {
    const products = calculateSubtotal("products", orderCounts);
    const options = calculateSubtotal("options", orderCounts);
    const total = products + options;

    setTotals({
      products,
      options,
      total,
    });
  }, [orderCounts]);

  const updateItemCount = (
    itemName: string,
    newItemCount: number,
    orderType: OrderType
  ) => {
    const newOrderCounts = { ...orderCounts };

    const orderCountsMap = orderCounts[orderType];
    orderCountsMap.set(itemName, newItemCount);

    setOrderCounts(newOrderCounts);
  };

  const resetOrderDatas = () => {
    setOrderCounts({
      products: new Map(),
      options: new Map(),
    });
  };

  return (
    <OrderContext.Provider
      value={[{ ...orderCounts, totals }, updateItemCount, resetOrderDatas]}
    >
      {children}
    </OrderContext.Provider>
  );
}
