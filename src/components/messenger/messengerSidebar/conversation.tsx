import Image from "next/image";
import { MessengerContext } from "@/pages/messenger";
import { useContext } from "react";

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
  const messengerContext = useContext(MessengerContext);

  return (
    <div
      onClick={() =>
        messengerContext.setActiveConversation({ type: "conversation", id })
      }
      className="flex flex-grow items-center hover:cursor-pointer px-4 mb-5"
    >
      <Image
        src={avatar_url}
        alt={username}
        width={37}
        height={37}
        className="rounded-full"
      />
      <div className="pl-2 flex-grow">
        <div className="text-sm text-gray-100 mb-1">{username}</div>
        <div className="flex">
          <div className="text-xs flex-grow text-gray-400">{last_message}</div>
          <div className="text-xs text-gray-500">{last_time_message}</div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
