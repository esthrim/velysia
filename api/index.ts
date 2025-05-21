import { Hono } from 'hono'
import app from '../src'

// Configure as Edge Function
export const config = {
  runtime: 'edge'
}

// Using the mount pattern explained in the Elysia docs, but with Hono
// Create an API handler for edge deployment
const api = new Hono()
  // Mount the main app at the root path
  .route('/', app)
  // You can also add edge-specific routes here
  .get('/edge-only', (c) => c.json({
    message: 'This route only exists in the edge deployment',
    environment: 'edge'
  }))

// Export the fetch handler for Vercel Edge Functions
export default api.fetch