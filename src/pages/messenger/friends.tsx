import DashboardLayout from "@/components/layouts/dashboard";
import FriendCard from "@/components/friends/card.friend";

const friends = [
  {
    id: 0,
    name: "Vahid Azizi",
    username: "#VahidAzizi#2245",
    avatar_url: "/0_1_640_Nqq.webp",
  },
  {
    id: 0,
    name: "Seyed Hejazi",
    username: "#SeyedHejazi#3365",
    avatar_url: "/0_1_640_Nqq.webp",
  },
];

const Friends = () => (
  <DashboardLayout>
    <div className="w-full bg-[#f5f7f9]">
      <div className="container bg-white border-b py-4 px-6">Friends</div>
      <div className="grid grid-cols-5 gap-5 px-10 py-10">
        {friends?.map((friend) => (
          <FriendCard key={friend.id} {...friend} />
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default Friends;
