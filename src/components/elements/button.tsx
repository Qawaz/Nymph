import React, { FunctionComponent } from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  block?: boolean;
  disabled?: boolean;
  onClick?: () => void | Promise<any>;
  tailwindColorClass?: string;
  tailwindTextColorClass?: string;
};

const Button: FunctionComponent<ButtonProps> = ({
  type,
  children,
  onClick,
  disabled,
  tailwindColorClass,
  tailwindTextColorClass,
  block,
  ...props
}) => (
  <>
    <button
      type={type}
      className={`${
        block && "w-full"
      } ${tailwindColorClass} ${tailwindTextColorClass} ${
        disabled && "opacity-50"
      } font-medium text-base text-white disabled:cursor-not-allowed rounded-md px-4 py-4`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  </>
);

export default Button;
