import React, { PropsWithChildren } from "react";
import Spinner from "./spinner";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  block?: boolean;
  disabled?: boolean;
  state?: "loading" | "success" | "idle" | "failed";
  onClick?: () => void | Promise<any>;
  extraClasses: string;
};

const Button = ({
  type,
  children,
  onClick,
  disabled,
  state,
  extraClasses,
  block,
  ...props
}: PropsWithChildren<ButtonProps>) => (
  <>
    <button
      type={type}
      className={`${block && "w-full"} ${
        disabled && "opacity-75"
      } font-medium text-base text-white disabled:cursor-not-allowed rounded-sm px-4 py-4 ${extraClasses}`}
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
