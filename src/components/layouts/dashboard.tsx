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
      <main className="flex">
        <Nav />
        <MessengerSidebar />
        <div className="container">{children}</div>
      </main>
      <style jsx>
        {`
          main {
            background-image: url("/dashboard-background.svg");
          }
        `}
      </style>
    </>
  );
};

export default DashboardLayout;
