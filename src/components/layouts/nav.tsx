import Image from "next/image";
import NavItem from "@/components/nav/items.nav";
import NavFooter from "@/components/nav/footer.nav";
import {
  BoltIcon,
  CreditCardIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { LifeBuoy } from "react-feather";
import { ActivitiesIcon } from "@/components/icons";

const Nav = () => {
  const nav = [
    {
      title: "Home",
      icon: <HomeIcon className="w-5 h-5 mr-2" />,
      destination: "/messenger",
    },
    {
      title: "Dashboard",
      icon: <CreditCardIcon className="w-5 h-5 mr-2" />,
      destination: "/messenger",
    },
    {
      title: "Messenger",
      icon: <BoltIcon className="w-5 h-5 mr-2" />,
      destination: "/messenger",
    },
    {
      title: "Activities",
      icon: <ActivitiesIcon className="w-6 h-6 mr-2" />,
      destination: "/messenger",
    },
    {
      title: "Support",
      icon: <LifeBuoy className="w-6 h-6 mr-2" />,
      destination: "/messenger",
    },
  ];

  return (
    <div className="flex flex-col bg-white py-3 border-r">
      <div className="flex-grow">
        <div className="flex items-center px-3">
          <Image
            src="/logo.jpg"
            className="mr-3"
            width={30}
            height={30}
            alt=" @AmberTimi#2042"
          />
          Whisper
        </div>
        <div className="mt-10">
          <div className="w-52 text-gray-900 bg-white">
            {nav.map((item) => (
              <NavItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
      <NavFooter />
    </div>
  );
};

export default Nav;
