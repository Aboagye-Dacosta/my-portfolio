import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { uploadFile as uploadFileApi } from "../../../services/apiFiles";

export function useUploadFile() {
  const queryClient = useQueryClient();
  const { isPending: isUploadingFile, mutate: uploadFile } = useMutation({
    mutationFn: uploadFileApi,
    onSuccess: () => {
      toast.success("File has ben uploaded successfully");
      queryClient.invalidateQueries(["strings"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    isUploadingFile,
    uploadFile,
  };
}
