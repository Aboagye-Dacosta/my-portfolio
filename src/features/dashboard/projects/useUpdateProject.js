import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createProject } from "../../../services/apiProjects";

export function useUpdateProject() {
  const queryClient = useQueryClient();
  const { isPending: isUpdatingProject, mutate: updateProject } = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      toast.success("Project has been update successfully");
      queryClient.invalidateQueries(["projects"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    isUpdatingProject,
    updateProject,
  };
}
