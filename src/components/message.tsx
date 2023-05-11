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
      <figure className="relative w-12 h-12 flex-shrink-0">
        {showAvatar && (
          <Image
            src={"/0_1_640_Nqq.webp"}
            className="rounded-full"
            alt={"username"}
            fill={true}
          />
        )}
      </figure>
      <p
        className={`text-sm leading-6 ${
          currentUserID === user_id ? "bg-[#edf1ff]" : "bg-blue-accent"
        } rounded-[50px] ${
          currentUserID === user_id ? "rounded-tl-sm" : "rounded-tr-sm"
        } ${
          currentUserID === user_id ? "text-gray-700" : "text-white"
        } px-6 py-4 mx-4`}
      >
        {content}
      </p>
    </div>
  );
};

export default Message;
