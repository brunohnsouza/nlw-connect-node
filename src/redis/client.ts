import { Redis } from 'ioredis'
import { env } from '../env'

export const redis = new Redis(env.REDIS_URL, {
  maxRetriesPerRequest: null,
})

redis.on('error', err => {
  throw err
})
async function initializeRedis() {
  await redis.connect()
  await redis.set('foo', 'bar')
}

initializeRedis().catch(err => {
  console.error('Failed to initialize Redis:', err)
})
