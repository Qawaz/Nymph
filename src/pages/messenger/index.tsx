import DashboardLayout from "@/components/layouts/dashboard";
import Messages from "@/components/containers/messages";
import { signOut } from "next-auth/react";
import MessagesDetails from "@/components/messages/messagesDetails";

const Dashboard = () => (
  <DashboardLayout>
    {/* <div
          className="text-white"
          //  onClick={() => signOut({ callbackUrl: "/" })}
        ></div> */}
    <Messages />
    <MessagesDetails />
  </DashboardLayout>
);

export default Dashboard;
