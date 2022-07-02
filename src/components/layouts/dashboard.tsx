import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import Unauthorized from "@/components/unauthorized";

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props): JSX.Element => {
  const { status } = useSession();

  if (status === "loading") return <div className="text-white">Loading</div>;

  if (status !== "authenticated") return <Unauthorized />;

  return (
    <>
      <main className="flex justify-center">
        <div className="container">{children}</div>
      </main>
      <style jsx>
        {`
          main {
            background-color: #131417;
          }
        `}
      </style>
    </>
  );
};

export default DashboardLayout;
