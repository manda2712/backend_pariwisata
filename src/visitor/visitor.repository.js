const prisma = require('../db')

async function createVisitor (data) {
  return prisma.visitor.create({
    data
  })
}

async function findVisitorByUid (uid) {
  return prisma.visitor.findUnique({
    where: { uid }
  })
}

async function findVisitorById (id) {
  return prisma.visitor.findUnique({
    where: { id }
  })
}

module.exports = {
  findVisitorByUid,
  findVisitorById,
  createVisitor
}
