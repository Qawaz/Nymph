import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  username: string;
  avatar_url: string;
};

const FriendCard = ({ name, username, avatar_url }: Props) => {
  return (
    <div className="bg-white shadow-sm">
      <div className="flex justify-center pt-6 mb-6">
        <figure className="relative w-32 h-32">
          <Image
            src={avatar_url}
            alt={`${username}-avatar`}
            className="rounded-full"
            fill={true}
          />
        </figure>
      </div>
      <Link href={`user/${username}`}>
        <h2 className="text-center text-gray-800 pb-1">{name}</h2>
        <h3 className="text-center text-xs text-gray-400">{username}</h3>
      </Link>
      <div className="text-sm text-gray-800 text-center border-t px-4 py-3 mt-5">
        Member of Internet Computer Guild
      </div>
    </div>
  );
};

export default FriendCard;
