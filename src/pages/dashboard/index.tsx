import DashboardLayout from "@/components/layouts/dashboard";
import { signOut } from "next-auth/react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="text-white" onClick={() => signOut()}>
        log out
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
