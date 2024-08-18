import { ChangeEventHandler } from "react";

interface Props {
  placeholder: string;
  value?: string;
  onChange: ChangeEventHandler;
  name: string;
  error?: string;
  type?:string
}

const InputField = (props: Props) => {
  return (
    <div>
      <input
        className="h-10 pl-4 w-80 border-gray-200 border"
        placeholder={props.placeholder}
        type={props.type??"text"}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
      <p className="text-xs text-red-700">{props.error}</p>
    </div>
  );
};

export default InputField;
