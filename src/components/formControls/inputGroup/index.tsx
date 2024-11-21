import { FC } from "react";
import BootstrapInputGroup from "react-bootstrap/InputGroup";
import { IInputGroupProps } from "@/types/types";

const InputGroup: FC<IInputGroupProps> = ({ children, ...props }) => {
  return <BootstrapInputGroup {...props}>{children}</BootstrapInputGroup>;
};

export default InputGroup;
