const prisma = require('../db')

// Insert page view baru
async function createPageView (data) {
  return prisma.pageView.create({
    data
  })
}

module.exports = {
  createPageView
}
