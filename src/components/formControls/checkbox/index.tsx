import { FC } from "react";
import Check from "react-bootstrap/FormCheck";
import { ICheckBoxProps } from "@/types/types";

const CheckBox: FC<ICheckBoxProps> = ({ type = "checkbox", ...props }) => {
  return <Check type={type} {...props} />;
};

export default CheckBox;
