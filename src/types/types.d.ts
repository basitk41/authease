import React from "react";
import { FormCheckType } from "react-bootstrap";
export interface IButtonProps {
  title: string;
  variant?:
    | "primary"
    | "secondary"
    | "outline-success"
    | "outline-secondary"
    | "outline-info"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

export interface ICheckBoxProps {
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  className?: string;
  type?: FormCheckType | undefined;
}

export interface IFormProps {
  children: React.ReactNode;
}
export interface IFormGroupProps extends IFormProps {
  className?: string;
}

export interface IInputGroupProps extends IFormGroupProps {}

export interface ILabelProps extends IFormGroupProps {}

export interface IInputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | string[] | undefined;
  className?: string;
  type?: "text" | "password" | "number";
  min?: number;
  max?: number;
  readOnly?: boolean;
}

export interface IHeadingProps {
  className?: string;
  text: string;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
