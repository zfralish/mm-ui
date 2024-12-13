import { useQuery } from "@tanstack/react-query";
import {
  getBird,
  getBirds,
  getWeightsWithinDateRange as getWeightsWithinTimeFrame,
} from "../requests/birdRequests";

export const useGetBirds = () => {
  return useQuery({
    queryKey: ["birds"],
    queryFn: getBirds,
  });
};

export const useGetBird = (birdId: string) => {
  return useQuery({
    queryKey: ["birds", birdId],
    queryFn: () => getBird(birdId),
  });
};
export const useGetWeightsWithinTimeFrame = (birdId: string, wvt: string) => {
  return useQuery({
    queryKey: ["birds", birdId],
    queryFn: () => getWeightsWithinTimeFrame(birdId, wvt),
  });
};
