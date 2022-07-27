import { Switch } from "@headlessui/react";
import { useState } from "react";

const ConversationNotification = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex border-t border-b border-[#333] py-5 mt-5 mb-5">
      <div className="flex-grow text-gray-200 text-sm">Notifications</div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-blue-accent" : "bg-teal-700"}
	  relative inline-flex h-[21px] w-[38px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-4" : "translate-x-0"}
		pointer-events-none inline-block h-[17px] w-[17px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default ConversationNotification;
