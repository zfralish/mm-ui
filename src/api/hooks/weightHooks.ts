import {useQuery} from "@tanstack/react-query";
import {listWeights} from "../requests/weightRequests.ts";

export const useListWeights = (birdId: string, page: number) => {
  return useQuery({
    queryKey: ["birds", birdId, "weights", page],
    queryFn: () => listWeights(birdId, page),
  });
};
