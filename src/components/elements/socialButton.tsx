import React, { PropsWithChildren } from "react";

type ButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void | Promise<any>;
  extraClasses?: string;
};

const SocialButton = ({
  icon,
  children,
  onClick,
  extraClasses,
  ...props
}: PropsWithChildren<ButtonProps>) => (
  <>
    <button
      className={`w-full font-medium text-base text-white disabled:cursor-not-allowed rounded-sm bg-gradient-to-r from-[#02c399] via-[#02c399] to-yellow-accent p-[2px] ${extraClasses}`}
      onClick={onClick}
      {...props}
    >
      <div className="bg-[#131417] flex items-center py-4 px-6">
        {icon}
        <span className="text-white pl-3">{children}</span>
      </div>
    </button>
  </>
);

export default SocialButton;
