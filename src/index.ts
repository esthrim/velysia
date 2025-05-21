import { Hono } from 'hono'

// This is your main app for local development
const app = new Hono()
  .get('/', (c) => c.text('Hello from Hono!'))
  .get('/api/hello', (c) => c.json({
    message: 'Hello from API endpoint',
    timestamp: new Date()
  }))

// For local development (when run directly)
if (import.meta.main) {
  console.log("🚀 Server is running at http://localhost:3000")
  Bun.serve({
    port: 3000,
    fetch: app.fetch
  })
}

// Export the app for use in the edge function
export default app