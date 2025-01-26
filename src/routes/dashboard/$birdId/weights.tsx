import { createFileRoute } from '@tanstack/react-router'
import {WeightGrid} from "../../../components/weightGrid.tsx";

export const Route = createFileRoute('/dashboard/$birdId/weights')({
  component: () => <WeightGrid/>,
})



