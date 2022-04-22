import axios from "axios";
import { FC, useEffect, useState } from "react";
import Products from "./Products";

interface TypeProps {
  orderType: "products" | "options";
}

const Type: FC<TypeProps> = ({ orderType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async (orderType: TypeProps["orderType"]) => {
      try {
        const res = await axios.get(`http://localhost:5000/${orderType}`);
        setItems(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadItems(orderType);
  }, [orderType]);

  return (
    <div>
      {orderType === "products" &&
        items.map((item) => {
          return (
            <Products
              key={item.name}
              name={item.name}
              imagePath={item.imagePath}
            />
          );
        })}
    </div>
  );
};

export default Type;
