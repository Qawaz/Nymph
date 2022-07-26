import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
  search: string;
};

const MessageSidebarSearch = () => {
  const { register, handleSubmit } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-4">
      <input
        type="text"
        className="w-full bg-[#252525] text-sm rounded placeholder:text-gray-500 py-3 px-4 mb-4"
        placeholder="Search..."
        {...register("search")}
      />
    </form>
  );
};

export default MessageSidebarSearch;
