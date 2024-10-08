import { useQuery } from "@tanstack/react-query";
import { getBird, getBirds } from "../requests/birdRequests";

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
