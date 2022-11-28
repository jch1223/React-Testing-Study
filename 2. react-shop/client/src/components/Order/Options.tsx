import { FC } from "react";

interface OptionsProps {
  name: string;
  updateItemCount: (itemName: string, newItemCount: number) => void;
}

const Options: FC<OptionsProps> = ({ name, updateItemCount }) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentValue = event.target.checked;

    updateItemCount(name, Number(currentValue));
  };
  return (
    <form>
      <input type="checkbox" id={`${name} option`} onChange={handleChange} />{" "}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
};

export default Options;
