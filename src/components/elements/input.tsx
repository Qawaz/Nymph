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
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0 ${
          error ? "border-red-500" : "border-gray-300"
        } ${extraClassName}`}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
      <style jsx>
        {`
          input {
            transition: all 200ms;
          }
        `}
      </style>
    </>
  ),
);

export default Input;
