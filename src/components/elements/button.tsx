type ButtonProps = {
  block?: boolean;
  disabled?: boolean;
  onClick: () => void | Promise<any>;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  block,
}) => (
  <>
    <button
      className={`${
        block && "w-full"
      } text-base text-gray-800 rounded-full px-4 py-2`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
    <style jsx>
      {`
        button {
          background: #01ffb9;
        }
        button:disabled {
          cursor: default;
          background: rgba(1, 285, 185, 0.5);
        }
      `}
    </style>
  </>
);

export default Button;
