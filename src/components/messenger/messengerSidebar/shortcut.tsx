import React from "react";

export type Props = {
  title: string;
  icon: React.ReactNode;
};

const Shortcut = ({ title, icon }: Props) => (
  <div className="flex items-center hover:cursor-pointer mb-5">
    {icon} <span className="text-sm text-gray-700 pl-2">{title}</span>
  </div>
);

export default Shortcut;
