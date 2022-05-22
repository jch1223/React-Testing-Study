import { FC } from "react";

interface OptionsProps {
  name: string;
}

const Options: FC<OptionsProps> = ({ name }) => {
  return (
    <form>
      <input type="checkbox" id={`${name} option`} />{" "}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
};

export default Options;
