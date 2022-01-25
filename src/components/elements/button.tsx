import React, { FunctionComponent } from "react";

type ButtonProps = {
  block?: boolean;
  disabled?: boolean;
  onClick: () => void | Promise<any>;
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  disabled,
  block,
  ...props
}) => (
  <>
    <button
      className={`${
        block && "w-full"
      } font-medium text-base text-gray-800 rounded-full px-4 py-2`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
    <style jsx>
      {`
        button {
          background: #01ffb9;
        }
        button:disabled {
          cursor: not-allowed;
          background: rgba(1, 285, 185, 0.5);
        }
      `}
    </style>
  </>
);

export default Button;
