const prisma = require('../db')

async function insertDesa (desaWisata) {
  const newDesa = await prisma.desaWisata.create({
    data: {
      namaDesa: desaWisata.namaDesa,
      lokasi: desaWisata.lokasi,
      foto: desaWisata.foto,
      deskripsi: desaWisata.deskripsi,
      longitude: desaWisata.longitude,
      latitude: desaWisata.latitude,
      jenisDesa: desaWisata.jenisDesa
    }
  })
  return newDesa
}

async function findDesa () {
  const desa = await prisma.desaWisata.findMany({
    select: {
      id: true,
      namaDesa: true,
      lokasi: true,
      foto: true,
      deskripsi: true,
      longitude: true,
      latitude: true,
      jenisDesa: true
    }
  })
  return desa
}

async function findDesaById (id) {
  const desa = await prisma.desaWisata.findUnique({
    where: {
      id: parseInt(id)
    }
  })
  return desa
}

async function editDesa (id, desaWisata) {
  const updateDesa = await prisma.desaWisata.update({
    where: {
      id: parseInt(id)
    },
    data: {
      namaDesa: desaWisata.namaDesa,
      lokasi: desaWisata.lokasi,
      foto: desaWisata.foto,
      deskripsi: desaWisata.deskripsi,
      longitude: desaWisata.longitude,
      latitude: desaWisata.latitude,
      jenisDesa: desaWisata.jenisDesa
    }
  })
  return updateDesa
}

async function deleteDesa (id) {
  await prisma.desaWisata.delete({
    where: {
      id: parseInt(id)
    }
  })
}

module.exports = {
  insertDesa,
  findDesa,
  findDesaById,
  editDesa,
  deleteDesa
}
