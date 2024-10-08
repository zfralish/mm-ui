import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/$birdId/trainings')({
  component: () => <div>Hello /dashboard/$birdId/trainings!</div>,
})
