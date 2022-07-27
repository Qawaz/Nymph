import Image from "next/image";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import SharedMedia from "./sharedMedia";
import Guild from "./guild";
import ConversationNotification from "./conversationNotification";
import ConversationNotes from "./conversationNotes";

const MessagesDetails = (): JSX.Element => {
  return (
    <div className="w-[300px] overflow-y-scroll max-h-screen px-4 py-10">
      <div className="text-center">
        <Image
          src={"https://avatarfiles.alphacoders.com/217/217821.png"}
          alt={"username"}
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <h2 className="text-gray-200 text-lg text-center font-semibold mt-4">
        Shina Mashiro
      </h2>
      <p className="text-gray-200 text-sm text-center font-semibold mt-1">
        Something in your eye
      </p>
      <h3 className="text-left text-gray-200 text-sm mt-10 mb-1">
        Description
      </h3>
      <p className="text-gray-500 text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <ConversationNotification />
      <Guild />
      <SharedMedia />
      <ConversationNotes />
    </div>
  );
};

export default MessagesDetails;
