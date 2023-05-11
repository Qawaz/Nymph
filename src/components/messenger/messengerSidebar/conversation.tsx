import Image from "next/image";
import useConversationStore from "@/zustand/conversationStore";

export type Conversation = {
  id: number;
  avatar_url: string;
  username: string;
  last_message: string;
  last_time_message: string;
};

const Conversation = ({
  id,
  avatar_url,
  username,
  last_message,
  last_time_message,
}: Conversation) => {
  const setConversation = useConversationStore(
    (state) => state.setConversation,
  );

  return (
    <div
      onClick={() => setConversation({ id, username, avatar_url })}
      className="flex flex-grow items-center hover:cursor-pointer hover:bg-[#f5f7f9] px-4 py-4"
    >
      <figure className="relative w-11 h-11 mr-1">
        <Image
          src={avatar_url}
          alt={username}
          className="rounded-full"
          fill={true}
        />
      </figure>
      <div className="pl-2 flex-grow">
        <div className="text-sm text-gray-700 mb-1">{username}</div>
        <div className="flex">
          <div className="text-xs flex-grow text-gray-400">{last_message}</div>
          <div className="text-xs text-gray-500">{last_time_message}</div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
