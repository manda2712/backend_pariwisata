const express = require('express')
const upload = require('../middleware/upload.middleware')
const router = express.Router()
const desaService = require('./desaWisata.service')

router.post('/insert', upload.single('foto'), async (req, res) => {
  try {
    const newDesas = {
      id: req.body.id,
      namaDesa: req.body.namaDesa,
      lokasi: req.body.lokasi,
      foto: req.file ? `/uploads/${req.file.filename}` : null,
      deskripsi: req.body.deskripsi,
      longitude: req.body.longitude,
      latitude: req.body.latitude,
      jenisDesa: req.body.jenisDesa
    }
    const newDesa = await desaService.createDesa(newDesas)
    res.status(201).json(newDesa)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const desaWisata = await desaService.getAllDesa()
    res.status(200).json(desaWisata)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const desaWisata = await desaService.getDesaId(req.params.id)
    console.log('Data dari DB:', desaWisata)
    res.status(200).json(desaWisata)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

router.patch('/:id', upload.single('foto'), async (req, res) => {
  try {
    const desaWistaId = parseInt(req.params.id)
    const desaWisata = {
      ...(req.body.namaDesa && { namaDesa: req.body.namaDesa }),
      ...(req.body.lokasi && { lokasi: req.body.lokasi }),
      ...(req.file && { foto: `/uploads/${req.file.filename}` }),
      ...(req.body.longitude && { longitude: req.body.longitude }),
      ...(req.body.latitude && { latitude: req.body.latitude }),
      ...(req.body.jenisDesa && { jenisDesa: req.body.jenisDesa })
    }
    const updateDesa = await desaService.editDesaById(desaWistaId, desaWisata)
    res.status(200).json(updateDesa)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const desaWistaId = req.params.id
    await desaService.deleteDesaById(desaWistaId)
    res.status(200).json({ message: 'Desa Wisata berhasil terhapus' })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

module.exports = router
