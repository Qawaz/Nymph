import Image from "next/future/image";
import { SettingsIcon } from "../icons";

const Nav = () => {
  return (
    <div className="flex flex-col text-white w-20">
      <div className="flex-grow">Whisper</div>
      <div className="flex flex-col justify-center items-center pb-5">
        <div className="hover:cursor-pointer mb-5">
          <SettingsIcon />
        </div>
        <Image
          src="https://avatarfiles.alphacoders.com/217/217821.png"
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Nav;
