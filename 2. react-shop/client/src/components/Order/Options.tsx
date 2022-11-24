import { FC } from "react";

interface OptionsProps {
  name: string;
  updateItemCount: (itemName: string, newItemCount: string) => void;
}

const Options: FC<OptionsProps> = ({ name, updateItemCount }) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentValue = event.target.value;

    updateItemCount(name, currentValue);
  };
  return (
    <form>
      <input type="checkbox" id={`${name} option`} onChange={handleChange} />{" "}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
};

export default Options;
