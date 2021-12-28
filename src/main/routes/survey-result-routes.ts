
import { makeSaveSurveyResultController } from '../factories/controller/survey-result/save-survey-resul/load-surveys-controller-factory'
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { auth } from '../middlewares/auth'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', auth, adaptRoute(makeSaveSurveyResultController()))
}
