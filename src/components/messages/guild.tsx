import Image from "next/image";

const Guild = () => {
  return (
    <div className="border-b border-[#333] mb-5">
      <div className="flex-grow text-gray-200 text-sm mb-3">Guild</div>
      <div className="flex items-center mt-10 mb-10">
        <Image
          src="/selemene-guild.png"
          alt={"username"}
          width={75}
          height={75}
          className="rounded-full"
        />
        <div className="pl-4">
          <div className="text-gray-200">Neopaganism</div>
          <div className="text-sm text-gray-500">Rank 13</div>
          <div className="text-sm text-gray-500">3890 members</div>
        </div>
      </div>
    </div>
  );
};

export default Guild;
