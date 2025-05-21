import { Elysia } from 'elysia'

// This is your main Elysia app that you'll use for development
const app = new Elysia()
  .get('/', () => 'Hello from Elysia!')
  .get('/api/hello', () => {
    return {
      message: 'Hello from API endpoint',
      timestamp: new Date()
    }
  })
  .listen(3000)

console.log(`🦊 Elysia server is running at http://localhost:${app.server?.port}`)

// Export the app for use in Vercel
export default app