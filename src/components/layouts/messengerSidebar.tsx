import MessageSidebarSearch from "@/components/messenger/messengerSidebar/search";
import { ContactsIcon, NewMessageIcon } from "@/components/icons";
import Channels from "@/components/containers/channels";
import Conversations from "@/components/containers/conversations";
import Shortcut from "@/components/messenger/messengerSidebar/shortcut";

const shortcuts = [
  {
    title: "Contacts",
    icon: <ContactsIcon />,
  },
  {
    title: "New Message",
    icon: <NewMessageIcon />,
  },
  {
    title: "Settings",
    icon: <ContactsIcon />,
  },
];

const MessengerSidebar = () => {
  return (
    <div className="text-white w-[300px] overflow-y-scroll max-h-screen py-4">
      <MessageSidebarSearch />
      <div className="px-4 mt-2 ">
        {shortcuts.map((shortcut, index) => (
          <Shortcut key={index} {...shortcut} />
        ))}
      </div>
      <Channels />
      <Conversations />
      {/* <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>

      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div>
      <div>i am messenger sidebar</div> */}
    </div>
  );
};

export default MessengerSidebar;
