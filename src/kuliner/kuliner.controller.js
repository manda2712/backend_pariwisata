const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload.middleware')
const kulinerService = require('./kuliner.service')

router.post('/insert', upload.single('foto'), async (req, res) => {
  try {
    const newKuliners = {
      nama_makanan: req.body.nama_makanan,
      foto: req.file ? `/uploads/${req.file.filename}` : null,
      deskripsi: req.body.deskripsi
    }
    const newKuliner = await kulinerService.createKuliner(newKuliners)
    res.status(200).json(newKuliner)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const newKuliner = await kulinerService.getAllKuliner()
    res.status(200).json(newKuliner)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const kuliner = await kulinerService.getAllKuliner()
    res.status(200).json(kuliner)
  } catch (error) {
    res.status(500).json(kuliner)
  }
})
router.patch('/:id', upload.single('foto'), async (req, res) => {
  try {
    const kulinerId = parseInt(req.params.id)
    const kuliner = {
      ...(req.body.nama_makanan && { nama_makanan: req.body.nama_makanan }),
      ...(req.file && { foto: `/uploads/${req.file.filename}` }),
      ...(req.body.deskripsi && { deskripsi: req.body.deskripsi })
    }
    const updateKuliner = await kulinerService.updateKuliner(kulinerId, kuliner)
    res.status(200).json(updateKuliner)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.delete('/all', async (req, res) => {
  try {
    await kulinerService.removeAllKuliner()
    res
      .status(200)
      .json({ message: 'Semua daftar rumah makan berhasil dihapus' })
  } catch (error) {
    res.status(500).json(error.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const kuliner = req.params.id
    await kulinerService.removeKulinerById(kuliner)
    res.status(200).json({ message: 'Kuliner berhasil terhapus' })
  } catch (error) {
    res.status(500).send(error.message)
  }
})
module.exports = router
