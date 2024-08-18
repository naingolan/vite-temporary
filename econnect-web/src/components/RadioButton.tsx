import { ChangeEventHandler } from "react";

interface Props {
  name: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler;
  checked: boolean;
  id: string;
}

const RadioButton = (props: Props) => {
  return (
    <>
      <input
        id={props.id}
        type="radio"
        name={props.name}
        className="pll-4"
        style={{ width: "1.5rem", height: "1.5rem" }}
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
      />
      <label htmlFor={props.id}>
        {props.label}
      </label>
    </>
  );
};

export default RadioButton;
