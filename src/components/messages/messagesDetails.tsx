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
    <div className="w-[300px] border-l flex-shrink-0 overflow-y-scroll max-h-screen px-4 py-10">
      <div className="flex justify-center">
        <figure className="relative w-32 h-32">
          <Image
            src={currentConversation.avatar_url}
            alt={`${currentConversation.username}-avatar`}
            className="rounded-full"
            fill={true}
          />
        </figure>
      </div>
      <h2 className="text-gray-700 text-lg text-center font-semibold mt-4">
        {currentConversation.username}
      </h2>
      <p className="text-gray-400 text-sm text-center mt-1">
        Something in your eye
      </p>
      <h3 className="text-left text-gray-800 text-sm mt-10 mb-1">
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
    </div>
  );
};

export default MessagesDetails;
