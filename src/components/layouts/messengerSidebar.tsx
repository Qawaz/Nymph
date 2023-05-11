import MessageSidebarSearch from "@/components/messenger/messengerSidebar/search";
import { ContactsIcon, NewMessageIcon } from "@/components/icons";
import Channels from "@/components/containers/channels";
import Conversations from "@/components/containers/conversations";
import NavItem from "@/components/nav/items.nav";

const shortcuts = [
  {
    title: "Friends",
    icon: <ContactsIcon className="mr-3" />,
    destination: "/messenger/friends",
  },
  {
    title: "New Message",
    icon: <NewMessageIcon className="mr-3" />,
    destination: "/messenger/friends",
  },
];

const MessengerSidebar = () => {
  return (
    <div className="w-[300px] border-r flex-shrink-0 overflow-y-scroll max-h-screen py-4">
      <MessageSidebarSearch />
      <div>
        {shortcuts.map((shortcut, index) => (
          <NavItem key={index} {...shortcut} />
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
