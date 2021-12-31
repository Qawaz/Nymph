import React from "react";

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement>((props, ref) => (
  <>
    <input className="input" {...props} ref={ref} />
    <style jsx>
      {`
        input {
          display: block;
          padding: 0.7rem 0.8rem;
          background: #17191d;
          appearance: none;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          font-size: 1rem;
          border-width: 1px;
          border-style: solid;
          border-color: rgba(15, 15, 15, 0.3);
          border-radius: 2px;
          outline: 0;
          transition: all 200ms;
        }
        input:focus {
          outline: 0;
          border-color: rgba(15, 15, 15, 1);
        }

        input:hover:not(:focus) {
          border-color: transparent;
        }
      `}
    </style>
  </>
));

export default Input;
