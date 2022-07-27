import { SubmitHandler, useForm } from "react-hook-form";
import { AttachIcon, SendIcon } from "../icons";

type Input = {
  message: string;
};

const MessagesFooter = (): JSX.Element => {
  const { register, handleSubmit } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => console.log(data);
  return (
    <div className="w-full flex bg-transparent items-center px-8 mb-4">
      <form
        className="flex flex-grow items-center rounded bg-[#fff]/10 pr-4"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <input
          type="text"
          className="w-full bg-transparent text-sm rounded text-gray-200 placeholder:text-gray-500 py-3 px-4"
          placeholder="Type something..."
          {...register("message")}
        />
        <button className="border-r mr-3 pr-3 ">
          <AttachIcon />
        </button>
        <button type="submit">
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default MessagesFooter;
