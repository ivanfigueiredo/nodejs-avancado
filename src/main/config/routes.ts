import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'

export default (app: Express): void => {
  const fullPath = join(__dirname, '/../routes')
  const router = Router()
  app.use('/api', router)
  readdirSync(fullPath).map(async file => {
    if (!file.includes('.test.')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}
