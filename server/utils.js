async function getSession() {
  const response = await fetch('http://localhost:3000/api/session')
  const data = await response.json()

  return data
}

const authMiddleware = () => async (_, res, next) => {
  const user = await getSession()

  if (user) {
    res.locals.user = user
  }

  next()
}

module.exports = {
  authMiddleware,
}
