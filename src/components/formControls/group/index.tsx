import { FC } from "react";
import BootstapFormGroup from "react-bootstrap/FormGroup";
import { IFormGroupProps } from "@/types/types";

const FormGroup: FC<IFormGroupProps> = ({ children, ...props }) => {
  return <BootstapFormGroup {...props}>{children}</BootstapFormGroup>;
};

export default FormGroup;
