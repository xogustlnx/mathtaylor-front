import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Kim',
  //     email: 'kim@prisma.io',
  //     password: '123456',
  //   },
  // })
  // console.log(user)
  const users = await prisma.user.findMany()
  console.log(users)
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
