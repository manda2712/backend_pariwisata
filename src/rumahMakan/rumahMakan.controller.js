const express = require('express')
const upload = require('../middleware/upload.middleware')
const router = express.Router()
const rumahMakanService = require('./rumahMakan.service')

router.post('/insert', upload.single('foto'), async (req, res) => {
  try {
    const newRumahMakans = {
      resto: req.body.resto,
      foto: req.file ? `/uploads/${req.file.filename}` : null,
      kulinerId: parseInt(req.body.kulinerId),
      lokasi: req.body.lokasi
    }
    const newRumahMakan = await rumahMakanService.createRumahMakan(
      newRumahMakans
    )
    res.status(200).json(newRumahMakan)
  } catch (error) {
    res.status(400).json({ messaga: error.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const rumahMakan = await rumahMakanService.getAllRumahMakan()
    res.status(200).json(rumahMakan)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const rumahMakan = await rumahMakanService.getRumahMakanByid(req.params.id)
    res.status(200).json(rumahMakan)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

router.patch('/:id', upload.single('foto'), async (req, res) => {
  try {
    const rumahMakanId = parseInt(req.params.id)
    const rumahMakan = {
      ...(req.body.resto && { resto: req.body.resto }),
      ...(req.file && { foto: `/uploads/${req.file.filename}` }),
      ...(req.body.kulinerId && { kulinerId: req.body.kulinerId }),
      ...(req.body.lokasi && { lokasi: req.body.lokasi })
    }
    const updateRumahMakan = await rumahMakanService.updateRumahMakanById(
      rumahMakanId,
      rumahMakan
    )
    res.status(200).json(updateRumahMakan)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.delete('/all', async (req, res) => {
  try {
    await rumahMakanService.removeAllRumahMakan(req.params.id)
    res
      .status(200)
      .json({ message: 'Semua daftar rumah makan berhasil dihapus' })
  } catch (error) {
    res.status(500).json(error.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const rumahMakan = req.params.id
    await rumahMakanService.removeRumahMakanById(rumahMakan)
    res.status(200).json({ message: 'Rumah makan berhasil terhapus' })
  } catch (error) {
    res.status(500).send(error.message)
  }
})
module.exports = router
