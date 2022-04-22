import { FC } from "react";

interface ProductsProps {
  name: string;
  imagePath: string;
}

const Products: FC<ProductsProps> = ({ name, imagePath }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:5000/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{ marginTop: "10px" }}>
        <label htmlFor={name} style={{ textAlign: "right" }}>
          {name}
        </label>
        <input
          id={name}
          style={{ marginLeft: 7 }}
          type="number"
          name="quantity"
          min="0"
          defaultValue={0}
        />
      </form>
    </div>
  );
};

export default Products;
