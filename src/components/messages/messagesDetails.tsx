import Image from "next/image";
import SharedMedia from "./sharedMedia";
import Guild from "./guild";
import ConversationNotification from "./conversationNotification";
import ConversationNotes from "./conversationNotes";
import useConversationStore from "@/zustand/conversationStore";

const MessagesDetails = (): JSX.Element => {
  const currentConversation = useConversationStore(
    (state) => state.currentConversation,
  );

  // const { data, isLoading } = useGetConversationMeta(currentConversation.id);

  return (
    <div className="w-[300px] flex-shrink-0 overflow-y-scroll max-h-screen px-4 py-10">
      <div className="text-center">
        <Image
          src={currentConversation.avatar_url}
          alt={`${currentConversation.username}-avatar`}
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <h2 className="text-gray-200 text-lg text-center font-semibold mt-4">
        {currentConversation.username}
      </h2>
      <p className="text-gray-200 text-sm text-center font-semibold mt-1">
        Something in your eye
      </p>
      <h3 className="text-left text-gray-200 text-sm mt-10 mb-1">
        Description
      </h3>
      <p className="text-gray-500 text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s.
      </p>
      <ConversationNotification />
      <Guild />
      <SharedMedia />
      <ConversationNotes />
    </div>
  );
};

export default MessagesDetails;
