import { createContext, Dispatch, SetStateAction, useState } from "react";
import DashboardLayout from "@/components/layouts/dashboard";
import Messages from "@/components/containers/messages";
import { signOut } from "next-auth/react";
import MessagesDetails from "@/components/messages/messagesDetails";

type ConversationType = {
  type: "conversation" | "channels" | "group" | "guild";
  id: number;
};

type MessengerContextType = {
  activeConversation: ConversationType;
  setActiveConversation: Dispatch<SetStateAction<ConversationType>>;
};

export const MessengerContext = createContext<MessengerContextType>({
  activeConversation: { type: "conversation", id: 0 },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setActiveConversation: () => {},
});

const Dashboard = () => {
  const [activeConversation, setActiveConversation] =
    useState<ConversationType>({
      type: "conversation" as const,
      id: 0,
    });

  return (
    <MessengerContext.Provider
      value={{ activeConversation: activeConversation, setActiveConversation }}
    >
      <DashboardLayout>
        {/* <div
          className="text-white"
          //  onClick={() => signOut({ callbackUrl: "/" })}
        ></div> */}
        <Messages />
        <MessagesDetails />
      </DashboardLayout>
    </MessengerContext.Provider>
  );
};

export default Dashboard;
