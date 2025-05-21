import { Elysia } from 'elysia'
import app from '../src'

// Configure as Edge Function
export const config = {
  runtime: 'edge'
}

// Create a handler that doesn't call .listen()
// but uses the same routes as your main app
const handler = new Elysia()
  .get('/', () => 'Hello from Elysia on Vercel Edge!')
  .get('/api/hello', () => {
    return {
      message: 'Hello from API endpoint',
      timestamp: new Date()
    }
  })

// Export the request handler function
export default function(request: Request) {
  return handler.handle(request)
}