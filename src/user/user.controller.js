const express = require('express')
const router = express.Router()

const adminService = require('./user.service')
const { admin } = require('../db')

router.post('/register', async (req, res, next) => {
  const { nama_Lengkap, jenis_kelamin, username, password } = req.body
  try {
    const newAdmin = await adminService.register(
      nama_Lengkap,
      jenis_kelamin,
      username,
      password
    )
    res.status(201).json({
      data: {
        nama_Lengkap: newAdmin.nama_Lengkap,
        jenis_kelamin: newAdmin.jenis_kelamin,
        username: newAdmin.username,
        role: newAdmin.role,
        password
      },
      message: 'Registration Succcess'
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(400).json({ error: 'Username dan Password wajib diisi' })
  }

  try {
    const admin = await adminService.login(username, password)
    res.status(200).json({ data: admin, message: 'Login berhasil' })
  } catch (error) {
    res.status(401).json({ error: error.message })
  }
})

module.exports = router
