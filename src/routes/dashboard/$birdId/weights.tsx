import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/$birdId/weights')({
  component: () => <div>Hello /dashboard/$birdId/weights!</div>,
})
