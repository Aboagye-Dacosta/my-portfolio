import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProject } from "../../../services/apiProjects";

export function useProject() {
  const { projectId } = useParams();
  const queryClient = useQueryClient();

  const {
    data: project = {},
    isPending: isLoadingProject,
  } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProject(projectId),
    initialData: queryClient
      .getQueryData(["projects"])
      .find((project) => String(project.id) === projectId),
    initialDataUpdatedAt: queryClient.getQueryState(["projects"]).dataUpdatedAt,
  });

  return { project, isLoadingProject };
}
