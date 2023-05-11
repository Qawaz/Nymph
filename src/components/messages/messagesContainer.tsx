import Message from "../message";

const messages = [
  {
    id: 0,
    user_id: 1,
    username: "SecretKeeper",
    content: "That would be nice to have you in my team",
  },
  {
    id: 1,
    user_id: 1,
    username: "SecretKeeper",
    content:
      "That would be nice if you have some experience in Docker and Kubernetes",
  },
  {
    id: 9,
    user_id: 1,
    username: "SecretKeeper",
    content:
      "That would be nice to have you in my team, although one my favorite dota hero is Invoker and maybe Slark is the next one, That would be nice to have you in my team, although one my favorite dota hero is Invoker and maybe Slark is the next one,That would be nice to have you in my team, although one my favorite dota hero is Invoker and maybe Slark is the next one",
  },
  {
    id: 2,
    user_id: 2,
    username: "SecretKeeper",
    content: "That would be nice to have you in my team",
  },
  {
    id: 3,
    user_id: 2,
    username: "SecretKeeper",
    content: "That would be nice to have you in my team",
  },
  {
    id: 4,
    user_id: 2,
    username: "SecretKeeper",
    content: "That would be nice to have you in my team",
  },
  {
    id: 5,
    user_id: 2,
    username: "SecretKeeper",
    content: "That would be nice to have you in my team",
  },
  // {
  //   id: 6,
  //   user_id: 2,
  //   username: "SecretKeeper",
  //   content: "That would be nice to have you in my team",
  // },
  // {
  //   id: 7,
  //   user_id: 2,
  //   username: "SecretKeeper",
  //   content: "That would be nice to have you in my team",
  // },
  {
    id: 8,
    user_id: 2,
    username: "SecretKeeper",
    content:
      "That would be nice to have you in my team, although one my favorite dota hero is Invoker and maybe Slark is the next one, That would be nice to have you in my team, although one my favorite dota hero is Invoker and maybe Slark is the next one,That would be nice to have you in my team, although one my favorite dota hero is Invoker and maybe Slark is the next one",
  },
  {
    id: 9,
    user_id: 2,
    username: "SecretKeeper",
    content: "That would be nice to have you in my team",
  },
];

const MessagesContainer = (): JSX.Element => {
  const showAvatar = (id: number, user_id: number): boolean =>
    !messages[id - 1] ? true : user_id !== messages[id - 1].user_id;

  return (
    <div className="flex flex-col-reverse flex-grow overflow-y-scroll max-h-screen pt-6 px-6">
      {/* Need another wrapper to fix column ordering in flex col messages */}
      <div>
        {messages.map((message, index) => (
          <Message
            key={message.id}
            showAvatar={showAvatar(index, message.user_id)}
            {...message}
          />
        ))}
      </div>
    </div>
  );
};

export default MessagesContainer;
