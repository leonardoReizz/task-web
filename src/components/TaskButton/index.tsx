import {
  Button,
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from "@imagine-ui/react";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  ripple?: boolean | undefined;
  shadow?: boolean | undefined;
  size?: ButtonSize | undefined;
  color?: ButtonColor | undefined;
  variant?: ButtonVariant | undefined;
  isLoading?: boolean;
};

export function TaskButton({ children, isLoading, ...props }: ButtonProps) {
  return (
    <Button {...props}>
      {isLoading && <>LOADING</>}
      {!isLoading && children}
    </Button>
  );
}
