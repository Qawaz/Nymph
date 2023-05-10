import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import Nav from "@/components/layouts/nav";
import MessengerSidebar from "./messengerSidebar";
import { Unauthorized } from "@/components/icons";

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props): JSX.Element => {
  const { status } = useSession();

  if (status === "loading") return <div className="text-white">Loading</div>;

  if (status !== "authenticated") return <Unauthorized />;

  return (
    <>
      <main className="flex bg-white">
        <Nav />
        <MessengerSidebar />
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
