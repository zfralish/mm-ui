import {Config} from "../../config.ts";
import {Weight} from "../schema/weights.ts";

export const listWeights = async (
  birdId: string,
  page: number,
): Promise<Weight[]> => {
  const res = await fetch(
    `${Config.apiUrl}/weights/by-bird/${birdId}?page=${page}`,
  );

  return await res.json();
};
