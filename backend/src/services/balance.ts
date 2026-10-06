import { prisma } from '../lib/prisma'

export async function adjustMemberBalance(memberId: string, delta: number) {
  await prisma.member.update({
    where: { id: memberId },
    data: { balance: { increment: delta } }
  })
}
