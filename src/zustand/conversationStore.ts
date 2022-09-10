import create from "zustand";
import { devtools } from "zustand/middleware";
import { Conversation } from "@/components/messenger/messengerSidebar/conversation";

type CurrentConversation = Pick<Conversation, "id" | "username" | "avatar_url">;

interface ConversationState {
  currentConversation: CurrentConversation;
  setConversation: (conversation: CurrentConversation) => void;
}

const useConversationStore = create<ConversationState>()(
  devtools((set) => ({
    currentConversation: { id: 0, username: "", avatar_url: "" },
    setConversation: (currentConversation) =>
      set(() => ({ currentConversation })),
  })),
);

export default useConversationStore;
