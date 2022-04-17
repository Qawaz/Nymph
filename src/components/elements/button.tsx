import React, { FunctionComponent } from "react";

type ButtonProps = {
  block?: boolean;
  disabled?: boolean;
  onClick: () => void | Promise<any>;
  tailwindColorClass?: string;
  tailwindTextColorClass?: string;
};

const Button: FunctionComponent<ButtonProps> = ({
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
      className={`${
        block && "w-full"
      } ${tailwindColorClass} ${tailwindTextColorClass} font-medium text-base text-white disabled:cursor-not-allowed rounded-md px-4 py-4`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  </>
);

export default Button;
