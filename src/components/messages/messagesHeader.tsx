import Image from "next/image";

const MessagesHeader = (): JSX.Element => (
  <div className="flex items-center backdrop-blur h-16 px-8">
    <Image
      src={"https://avatarfiles.alphacoders.com/217/217821.png"}
      alt={"username"}
      width={50}
      height={50}
      className="rounded-full"
    />
    <div className="text-gray-200 text-lg font-semibold ml-4">
      Shina Mashiro
    </div>
  </div>
);

export default MessagesHeader;
