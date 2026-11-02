import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query', 'error', 'warn'],
})

prisma.$connect()
  .then(() => {
    console.log('✓ Prisma connected to the database')
  })
  .catch((err) => {
    console.error('✗ Prisma connection error:', err)
  })

export default prisma