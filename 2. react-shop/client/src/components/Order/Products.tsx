import { FC } from "react";

interface ProductsProps {
  name: string;
  imagePath: string;
  updateItemCount: (itemName: string, newItemCount: number) => void;
}

const Products: FC<ProductsProps> = ({ name, imagePath, updateItemCount }) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentValue = event.target.value;

    updateItemCount(name, Number(currentValue));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:5001/${imagePath}`}
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
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Products;
