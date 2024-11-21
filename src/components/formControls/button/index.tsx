import { FC } from "react";
import BootstrapButton from "react-bootstrap/Button";
import { IButtonProps } from "@/types/types";

const Button: FC<IButtonProps> = ({
  title,
  variant = "outline-success",
  ...props
}) => {
  return (
    <BootstrapButton variant={variant} {...props}>
      {title}
    </BootstrapButton>
  );
};

export default Button;
