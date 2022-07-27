import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
  search: string;
};

const ConversationNotes = (): JSX.Element => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => console.log(data);

  const toggleEditMode = () => setEditMode(!editMode);

  return (
    <div>
      <div className="flex-grow text-gray-200 text-sm mb-3">Your Notes</div>
      {editMode ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className="w-full bg-[#fff]/10 text-sm rounded text-gray-200 placeholder:text-gray-500 py-3 px-4 mb-4"
            placeholder="Whats in your mind about this..."
            {...register("search")}
            onBlur={toggleEditMode}
          />
        </form>
      ) : (
        <div className="text-gray-200 text-sm" onClick={toggleEditMode}>
          My notes comes here
        </div>
      )}
    </div>
  );
};

export default ConversationNotes;
