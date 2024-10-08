import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/$birdId/feedings')({
  component: () => <div>Hello /dashboard/$birdId/feedings!</div>,
})
