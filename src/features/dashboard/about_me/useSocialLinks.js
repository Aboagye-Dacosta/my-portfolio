import { useQuery } from "@tanstack/react-query";
import { getSocialLinks } from "../../../services/apiLinks";

export function useSocialLinks() {
  const { data: links = [], isPending: isLoadingLinks } = useQuery({
    queryKey: ["links"],
    queryFn: getSocialLinks,
  });

  return { links, isLoadingLinks };
}
