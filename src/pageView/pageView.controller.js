const express = require('express')
const router = express.Router()
const pageViewService = require('./pageView.service')

// Mencatat page view
router.post('/track', async (req, res) => {
  try {
    const { visitorId, page } = req.body

    if (!visitorId || !page) {
      return res.status(400).json({
        message: 'visitorId dan page wajib dikirim'
      })
    }

    const result = await pageViewService.addPageView(visitorId, page)

    res.status(201).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
