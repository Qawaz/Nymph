import useConversationStore from "@/zustand/conversationStore";
import Image from "next/image";

const MessagesHeader = (): JSX.Element => {
  const currentConversation = useConversationStore(
    (state) => state.currentConversation,
  );

  return (
    <div className="flex items-center backdrop-blur border-b h-16 px-8">
      <figure className="relative w-12 h-12">
        <Image
          src={"/0_1_640_Nqq.webp"}
          alt={`${currentConversation.username}-avatar`}
          className="rounded-full"
          fill={true}
        />
      </figure>
      <div className="text-gray-700 ml-4">{currentConversation.username}</div>
    </div>
  );
};

export default MessagesHeader;
