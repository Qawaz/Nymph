import Conversation, {
  Conversation as ConversationType,
} from "@/components/messenger/messengerSidebar/conversation";

const conversations: ConversationType[] = [
  {
    id: 3,
    avatar_url: "/0_1_640_Nqq.webp",
    username: "Knights of Valur",
    last_message: "That would be nice...",
    last_time_message: "2m ago",
  },
  {
    id: 1,
    avatar_url: "/0_1_640_Nqq.webp",
    username: "Damage Control",
    last_message: "That would be nice...",
    last_time_message: "4h ago",
  },
  {
    id: 2,
    avatar_url: "/0_1_640_Nqq.webp",
    username: "Interneti",
    last_message: "That would be nice...",
    last_time_message: "yesterday",
  },
];

const Channels = (): JSX.Element => (
  <div className="mt-6 mb-10">
    <div className="text-sm text-black uppercase mt-6 mb-4 px-4">Channels</div>
    {conversations.map((conversation) => (
      <Conversation key={conversation.id} {...conversation} />
    ))}
  </div>
);

export default Channels;
