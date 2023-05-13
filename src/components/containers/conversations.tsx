import { faker } from "@faker-js/faker";
import Conversation, {
  Conversation as ConversationType,
} from "@/components/messenger/messengerSidebar/conversation";

const conversations: ConversationType[] = [
  {
    id: 1,
    avatar_url: faker.internet.avatar(),
    username: faker.person.fullName(),
    last_message: faker.lorem.sentence(),
    last_time_message: "2m ago",
  },
  {
    id: 2,
    avatar_url: faker.internet.avatar(),
    username: faker.person.fullName(),
    last_message: faker.lorem.sentence(),
    last_time_message: "2m ago",
  },
  {
    id: 3,
    avatar_url: faker.internet.avatar(),
    username: faker.person.fullName(),
    last_message: faker.lorem.sentence(),
    last_time_message: "2m ago",
  },
  {
    id: 4,
    avatar_url: faker.internet.avatar(),
    username: faker.person.fullName(),
    last_message: faker.lorem.sentence(),
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
