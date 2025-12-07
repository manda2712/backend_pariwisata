const prisma = require('../db')

async function insertRumahMakan (rumahMakan) {
  const newRumahMakan = await prisma.rumahMakan.create({
    data: {
      resto: rumahMakan.resto,
      foto: rumahMakan.foto,
      kulinerId: rumahMakan.kulinerId,
      lokasi: rumahMakan.lokasi
    },
    include: {
      kuliner: {
        select: {
          nama_makanan: true
        }
      }
    }
  })
  return newRumahMakan
}

async function findRumahMakan () {
  const rumahMakan = await prisma.rumahMakan.findMany({
    select: {
      resto: true,
      foto: true,
      kulinerId: true,
      lokasi: true,
      kuliner: {
        select: {
          nama_makanan: true
        }
      }
    }
  })
  return rumahMakan
}

async function findRumahMakanByid (id) {
  const rumahMakan = await prisma.rumahMakan.findUnique({
    where: {
      id: parseInt(id)
    },
    include: {
      kuliner: {
        select: {
          nama_makanan: true
        }
      }
    }
  })
  return rumahMakan
}

async function editRumahMakan (id, rumahMakan) {
  const updateRumahMakan = await prisma.rumahMakan.update({
    where: {
      id: parseInt(id)
    },
    data: {
      resto: rumahMakan.resto,
      foto: rumahMakan.foto,
      kulinerId: rumahMakan.kulinerId,
      lokasi: rumahMakan.lokasi
    },
    include: {
      kuliner: {
        select: {
          nama_makanan: true
        }
      }
    }
  })
  return updateRumahMakan
}

async function deleteRumahMakan (id) {
  await prisma.rumahMakan.delete({
    where: { id: parseInt(id) }
  })
}

async function deleteAllRumahMakan () {
  return await prisma.rumahMakan.deleteMany({})
}

module.exports = {
  insertRumahMakan,
  findRumahMakan,
  findRumahMakanByid,
  editRumahMakan,
  deleteAllRumahMakan,
  deleteRumahMakan
}
