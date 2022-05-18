import React, { FunctionComponent } from "react";
import Spinner from "./spinner";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void | Promise<any>;
  tailwindColorClass?: string;
  tailwindTextColorClass?: string;
};

const Button: FunctionComponent<ButtonProps> = ({
  type,
  children,
  onClick,
  disabled,
  loading,
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
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
          <span className="pl-3">Processing...</span>
        </div>
      ) : (
        children
      )}
    </button>
  </>
);

export default Button;
