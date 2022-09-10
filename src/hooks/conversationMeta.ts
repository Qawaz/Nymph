import $axios from "@/utilities/axios";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

const useGetConversationMeta = (conversation_id: number) =>
  useQuery([`conversation-meta-${conversation_id}`], () =>
    $axios
      .get("/conversation-meta")
      .then((response: AxiosResponse) => response.data),
  );

export default useGetConversationMeta;
