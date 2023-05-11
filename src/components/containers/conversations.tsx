import Conversation, {
  Conversation as ConversationType,
} from "@/components/messenger/messengerSidebar/conversation";

const conversations: ConversationType[] = [
  {
    id: 1,
    avatar_url: "/0_1_640_Nqq.webp",
    username: "Shina Mashiro",
    last_message: "That would be nice...",
    last_time_message: "2m ago",
  },
  {
    id: 2,
    avatar_url: "/0_1_640_Nqq.webp",
    username: "Vahid Azizi",
    last_message: "That would be nice...",
    last_time_message: "2m ago",
  },
  {
    id: 3,
    avatar_url: "/0_1_640_Nqq.webp",
    username: "Mohammad Hossein",
    last_message: "That would be nice...",
    last_time_message: "2m ago",
  },
  {
    id: 4,
    avatar_url: "/0_1_640_Nqq.webp",
    username: "Seyed",
    last_message: "That would be nice...",
    last_time_message: "2m ago",
  },
];

const Conversations = (): JSX.Element => (
  <div>
    <div className="text-sm text-black uppercase mt-6 mb-4 px-4">Messages</div>
    {conversations.map((conversation) => (
      <Conversation key={conversation.id} {...conversation} />
    ))}
  </div>
);

export default Conversations;
