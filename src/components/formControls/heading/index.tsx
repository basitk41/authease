import { FC } from "react";
import { IHeadingProps } from "@/types/types";

const Heading: FC<IHeadingProps> = ({ className, text, variant }) => {
  const Tag = variant;
  return <Tag className={className}>{text}</Tag>;
};

export default Heading;
