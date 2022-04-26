import React from "react";

type Props = {
  type?: string;
  error?: boolean | undefined;
  placeholder?: string;
  extraClassName?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
};

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ error = false, extraClassName, placeholder, ...props }, ref) => (
    <>
      <input
        className={`appearance-none input focus:border-yellowAccent outline-0 ${
          error ? "border-red-500" : "border-gray-800"
        } ${extraClassName}`}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
      <style jsx>
        {`
          input {
            display: block;
            padding: 0.7rem 0.8rem;
            background: rgb(51, 54, 67);
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            font-size: 1rem;
            color: white;
            border-width: 1px;
            border-style: solid;
            border-radius: 2px;
            transition: all 200ms;
          }
        `}
      </style>
    </>
  ),
);

export default Input;
