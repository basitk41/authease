import { FC } from "react";
import FormLabel from "react-bootstrap/FormLabel";
import { ILabelProps } from "@/types/types";

const Label: FC<ILabelProps> = ({ children, ...props }) => {
  return <FormLabel {...props}>{children}</FormLabel>;
};

export default Label;
