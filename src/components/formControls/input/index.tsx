import { FC } from "react";
import FormControl from "react-bootstrap/FormControl";
import { IInputProps } from "@/types/types";

const Input: FC<IInputProps> = ({ type = "text", ...props }) => {
  return <FormControl type={type} {...props} />;
};

export default Input;
