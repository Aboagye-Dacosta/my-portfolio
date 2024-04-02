import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteProject as deleteProjectApi } from "../../../services/apiProjects";

export function useDeleteProject() {
  const queryClient = useQueryClient();
  const { isPending: isDeletingProject, mutate: deleteProject } = useMutation({
    mutationFn: deleteProjectApi,
    onSuccess: () => {
      toast.success("Project has been deleted successfully");
      queryClient.invalidateQueries(["projects"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    isDeletingProject,
    deleteProject,
  };
}
