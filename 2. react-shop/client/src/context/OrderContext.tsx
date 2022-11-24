import { createContext, ReactChild, useEffect, useMemo, useState } from "react";
import { OrderType } from "../components/Order/Type";

export const OrderContext = createContext([]);

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

  return (
    <OrderContext.Provider
      value={[{ ...orderCounts, totals }, updateItemCount]}
    >
      {children}
    </OrderContext.Provider>
  );
}
