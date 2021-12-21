import { BodyParser, cors, contentType } from '../middlewares/index'
import { Express, urlencoded } from 'express'

export default (app: Express): void => {
  app.use(BodyParser)
  app.use(cors)
  app.use(urlencoded({ extended: true }))
  app.use(contentType)
}
