const express = require('express')
const router = express.Router()
const visitorService = require('./visitor.service')
router.post('/register', async (req, res) => {
  try {
    const { uid } = req.body

    if (!uid) {
      return res.status(400).json({ message: 'UID wajib dikirim' })
    }

    const ip = req.ip
    const userAgent = req.headers['user-agent']

    const visitor = await visitorService.registerVisitor(uid, ip, userAgent)

    res.status(200).json(visitor)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
