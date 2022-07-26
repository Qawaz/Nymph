import Conversation, {
  Conversation as ConversationType,
} from "@/components/messenger/messengerSidebar/conversation";

const conversations: ConversationType[] = [
  {
    id: 1,
    avatar_url: "https://avatarfiles.alphacoders.com/217/217821.png",
    username: "Shina Mashiro",
    last_message: "That would be nice...",
    last_time_message: "2mins ago",
  },
  {
    id: 2,
    avatar_url: "https://avatarfiles.alphacoders.com/217/217821.png",
    username: "Shina Mashiro",
    last_message: "That would be nice...",
    last_time_message: "2mins ago",
  },
  {
    id: 3,
    avatar_url: "https://avatarfiles.alphacoders.com/217/217821.png",
    username: "Shina Mashiro",
    last_message: "That would be nice...",
    last_time_message: "2mins ago",
  },
];

const Channels = (): JSX.Element => (
  <div className="my-10">
    <div className="text-sm text-gray-400 uppercase mt-6 mb-4 px-4">
      Channels
    </div>
    {conversations.map((conversation) => (
      <Conversation key={conversation.id} {...conversation} />
    ))}
  </div>
);

export default Channels;
