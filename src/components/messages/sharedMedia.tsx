import Image from "next/image";

export type SharedMedia = (typeof media)[number];

const media = [
  {
    id: 0,
    type: "image",
    url: "https://images.unsplash.com/photo-1658752293528-a54ba4c7c179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 1,
    type: "image",
    url: "https://images.unsplash.com/photo-1658843941585-dd447ae263c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  },
  {
    id: 2,
    type: "image",
    url: "https://images.unsplash.com/photo-1658785138610-b0fa036081c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

const SharedMedia = (): JSX.Element => {
  const renderMedia = (media: SharedMedia) => {
    switch (media.type) {
      case "image":
        return (
          <Image
            key={media.id}
            src={media.url}
            alt={"username"}
            width={300}
            height={300}
            className="hover:opacity-50 hover:cursor-pointer"
          />
        );
    }
  };

  return (
    <div className="border-b border-[#333] pb-6 mb-4">
      <div className="flex-grow text-gray-200 text-sm mb-3">Media</div>
      <div className="grid grid-cols-2 gap-2">
        {media.map((item) => renderMedia(item))}
      </div>
    </div>
  );
};

export default SharedMedia;
