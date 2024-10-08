import { createFileRoute } from "@tanstack/react-router";
import { zodSearchValidator } from "@tanstack/router-zod-adapter";
import { z } from "zod";
import MainGrid from "../../../components/mainGrid";

const DashBoardIndexSearchParams = z.object({
  wvt: z.string().default("1w"),
});

export const Route = createFileRoute("/dashboard/$birdId/")({
  component: DashBoardIndex,
  validateSearch: zodSearchValidator(DashBoardIndexSearchParams),
});

function DashBoardIndex() {
  const { birdId } = Route.useParams();
  const { wvt } = Route.useSearch();
  return <MainGrid birdId={birdId} wvt={wvt} />;
}
