import axios from "axios";
import { FC, useEffect, useState } from "react";

import ErrorBanner from "../common/ErrorBanner";
import Options from "./Options";
import Products from "./Products";

interface TypeProps {
  orderType: "products" | "options";
}

const Type: FC<TypeProps> = ({ orderType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadItems = async (orderType: TypeProps["orderType"]) => {
      try {
        const res = await axios.get(`http://localhost:5001/${orderType}`);
        setItems(res.data);
      } catch (error) {
        setError(true);
      }
    };

    loadItems(orderType);
  }, [orderType]);

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

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

      {orderType === "options" &&
        items.map((item) => {
          return <Options key={item.name} name={item.name} />;
        })}
    </div>
  );
};

export default Type;
