import useConversationStore from "@/zustand/conversationStore";
import Image from "next/image";

const MessagesHeader = (): JSX.Element => {
  const currentConversation = useConversationStore(
    (state) => state.currentConversation,
  );

  return (
    <div className="flex items-center backdrop-blur h-16 px-8">
      <Image
        src={"https://avatarfiles.alphacoders.com/217/217821.png"}
        alt={`${currentConversation.username}-avatar`}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="text-gray-200 text-lg font-semibold ml-4">
        {currentConversation.username}
      </div>
    </div>
  );
};

export default MessagesHeader;
