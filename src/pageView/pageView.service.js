const pageViewRepo = require('./pageView.repository')
const visitorService = require('../visitor/visitor.service')

async function addPageView (visitorId, page) {
  // Cek apakah visitor ID valid
  const visitor = await visitorService.getVisitorById(visitorId)

  if (!visitor) {
    throw new Error('Visitor tidak ditemukan')
  }

  // Simpan page view
  const pageView = await pageViewRepo.createPageView({
    visitorId,
    page
  })

  return pageView
}

module.exports = {
  addPageView
}
