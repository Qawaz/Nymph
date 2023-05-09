import Image from "next/image";
import NavItem from "@/components/nav/items.nav";
import { BellIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";

const NavFooter = () => {
  const nav = [
    {
      title: "Notifications",
      icon: <BellIcon className="w-5 h-5 mr-2" />,
    },
    {
      title: "Settings",
      icon: <Cog8ToothIcon className="w-6 h-6 mr-2" />,
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-center items-center pb-5">
        {nav.map((item) => (
          <NavItem key={item.title} {...item} />
        ))}
      </div>
      <div className="px-4 pb-4">
        <div className="flex items-center max-w-sm px-3 py-4 bg-white border border-inherit rounded-xl hover:bg-gray-50 hover:cursor-pointer">
          <figure className="relative w-12 h-12 mr-2">
            <Image
              src="/0_1_640_Nqq.webp"
              className="rounded-full"
              fill={true}
              alt=" @AmberTimi#2042"
            />
          </figure>
          <div className="block">
            <h5 className="mb-1 text-xs tracking-tight text-gray-900 dark:text-white">
              Amber Timland
            </h5>
            <p className="font-normal text-[10px] text-gray-500 dark:text-gray-400">
              @AmberTimi#2042
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavFooter;
