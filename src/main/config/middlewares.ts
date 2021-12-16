import { Express } from 'express'
import { BodyParser, cors, contentType } from '../middlewares/index'

export default (app: Express): void => {
  app.use(BodyParser)
  app.use(cors)
  app.use(contentType)
}
