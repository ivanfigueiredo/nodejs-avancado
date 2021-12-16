import { Express } from 'express'
import { BodyParser } from '../middlewares/body-parser'
import { cors } from '../middlewares/cors'
import { contentType } from '../middlewares/content-type'

export default (app: Express): void => {
  app.use(BodyParser)
  app.use(cors)
  app.use(contentType)
}
