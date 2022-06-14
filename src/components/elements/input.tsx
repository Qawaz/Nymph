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
        className={`appearance-none input placeholder:text-[#909090] rounded-sm focus:border-yellowAccent outline-0 ${
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
            padding: 1.2rem 1.4rem;
            background: #222222;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            font-size: 1rem;
            color: white;
            transition: all 200ms;
          }
        `}
      </style>
    </>
  ),
);

export default Input;
