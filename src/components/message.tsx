import Image from "next/image";

const currentUserID = 1;

export interface Message {
  id: number;
  user_id: number;
  content: string;
}

const Message = ({
  user_id,
  content,
  showAvatar,
}: Message & { showAvatar: boolean }): JSX.Element => {
  return (
    <div
      className={`flex ${
        currentUserID === user_id ? "flex-row pr-20" : "flex-row-reverse pl-20"
      } mb-5`}
    >
      <figure className="w-12 h-12 flex-shrink-0">
        {showAvatar && (
          <Image
            src={"https://avatarfiles.alphacoders.com/217/217821.png"}
            alt={"username"}
            width={48}
            height={48}
            className="rounded-full "
            layout="fixed"
          />
        )}
      </figure>
      <p
        className={`text-gray-200 text-sm leading-6 ${
          currentUserID === user_id ? "bg-[#fff]/10" : "bg-blue-accent"
        } rounded-[50px] ${
          currentUserID === user_id ? "rounded-tl-sm" : "rounded-tr-sm"
        } px-6 py-4 mx-4`}
      >
        {content}
      </p>
    </div>
  );
};

export default Message;
