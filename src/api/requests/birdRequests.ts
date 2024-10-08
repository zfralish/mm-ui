import { Bird } from "../schema/birds";
import { Config } from "../../config";

export const getBirds = async (): Promise<Bird[]> => {
  const res = await fetch(`${Config.apiUrl}/birds`, {});

  return await res.json();
};

export const getBird = async (id: string): Promise<Bird> => {
  const res = await fetch(`${Config.apiUrl}/birds/${id}`);

  return await res.json();
};
