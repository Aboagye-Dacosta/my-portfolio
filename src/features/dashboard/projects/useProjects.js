import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../../services/apiProjects";

export function useProjects() {
  const {
    data: projects = [],
    isPending: isLoadingProjects,
    isFetching: isFetchingProject,
    isPaused
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return { projects, isLoadingProjects ,isFetchingProject,isPaused};
}
