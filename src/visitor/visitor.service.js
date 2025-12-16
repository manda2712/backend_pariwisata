const visitorRepo = require('./visitor.repository')

async function registerVisitor (uid, ip, userAgent) {
  let visitor = await visitorRepo.findVisitorByUid(uid)

  if (!visitor) {
    visitor = await visitorRepo.createVisitor({
      uid,
      ip,
      userAgent
    })
  }
  return visitor
}

async function getVisitorById (id) {
  return visitorRepo.findVisitorById(id)
}

module.exports = {
  registerVisitor,
  getVisitorById
}
