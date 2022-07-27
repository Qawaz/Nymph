import MessagesHeader from "@/components/messages/messagesHeader";
import MessagesFooter from "@/components/messages/messagesFooter";

const Messages = () => {
  return (
    <div className="flex flex-col flex-grow max-h-screen bg-gradient-to-b from-[#271c1c] to-[#27161e]">
      <MessagesHeader />
      <div className="flex-grow">Messagses Container</div>
      <MessagesFooter />
    </div>
  );
};

export default Messages;
