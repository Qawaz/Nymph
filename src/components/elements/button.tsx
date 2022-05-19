import React, { FunctionComponent } from "react";
import Spinner from "./spinner";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  block?: boolean;
  disabled?: boolean;
  state?: "loading" | "success" | "idle" | "failed";
  onClick?: () => void | Promise<any>;
  tailwindColorClass?: string;
  tailwindTextColorClass?: string;
};

const Button: FunctionComponent<ButtonProps> = ({
  type,
  children,
  onClick,
  disabled,
  state,
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
      {(() => {
        switch (state) {
          case "loading":
            return (
              <div className="flex justify-center items-center">
                <Spinner />
                <span className="pl-3">Processing...</span>
              </div>
            );
          case "success":
            return (
              <div className="flex justify-center items-center">
                <span className="pl-3">Success</span>
              </div>
            );
          case "failed":
            return (
              <div className="flex justify-center items-center">
                <span className="pl-3">Failed</span>
              </div>
            );
          case "idle":
            return children;
          default:
            return children;
        }
      })()}
    </button>
  </>
);

export default Button;
