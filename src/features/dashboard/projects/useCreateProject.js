import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createProject as createProjectApi } from "../../../services/apiProjects";

export function useCreateProject() {
  const queryClient = useQueryClient();
  const { isPending: isCreatingProject, mutate: createProject } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: () => {
      toast.success("Project has been created successfully");
      queryClient.invalidateQueries(["projects"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    isCreatingProject,
    createProject,
  };
}
