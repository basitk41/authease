import { FC } from "react";
import BootstrapForm from "react-bootstrap/Form";
import { IFormProps } from "@/types/types";

const Form: FC<IFormProps> = ({ children }) => {
  return <BootstrapForm>{children}</BootstrapForm>;
};

export default Form;
