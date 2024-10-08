import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/$birdId/hunts')({
  component: () => <div>Hello /dashboard/$birdId/hunts!</div>,
})
