import { FC } from "react";

interface OptionsProps {
  name: string;
}

const Options: FC<OptionsProps> = ({ name }) => {
  return (
    <form>
      <input type="checkbox" name="" id={`${name} option`} />{" "}
      <label htmlFor={`${name} option`}></label>
    </form>
  );
};

export default Options;
