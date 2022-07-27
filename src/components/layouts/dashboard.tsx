import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import Unauthorized from "@/components/unauthorized";
import Nav from "@/components/layouts/nav";
import MessengerSidebar from "./messengerSidebar";

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props): JSX.Element => {
  const { status } = useSession();

  if (status === "loading") return <div className="text-white">Loading</div>;

  if (status !== "authenticated") return <Unauthorized />;

  return (
    <>
      <main className="flex bg-gradient-to-b from-[#3b3132] to-[#271b25]">
        <Nav />
        <MessengerSidebar />
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
