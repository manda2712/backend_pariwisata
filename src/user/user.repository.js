const prisma = require('../db')

async function createAdmin (admin) {
  try {
    const newAdmin = await prisma.admin.create({ data: admin })
    return newAdmin
  } catch (error) {
    console.error('error saat regsitrasi user:', error)
    throw new Error('failed to create user')
  }
}

async function findAdmin (username) {
  return await prisma.admin.findFirst({
    where: { username }
  })
}

module.exports = { createAdmin, findAdmin }
