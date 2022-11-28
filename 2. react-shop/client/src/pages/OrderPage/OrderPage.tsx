import React, { useContext } from "react";
import Type from "../../components/Order/Type";
import { OrderContext } from "../../context/OrderContext";

const OrderPage = () => {
  const [orderData] = useContext(OrderContext);

  console.log(orderData);

  return (
    <div>
      <h1>travel products</h1>
      <div>
        <Type orderType="products"></Type>
      </div>
      <div style={{ display: "flex", marginTop: 20 }}>
        <div style={{ width: "50%" }}>
          <Type orderType="options"></Type>
        </div>
        <div>
          <h2>Total Price: {orderData.totals.total}</h2>
          <br />
          <button>주문</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
