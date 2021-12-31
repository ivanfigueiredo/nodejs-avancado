
import { makeSaveSurveyResultController } from '../factories/controller/survey-result/save-survey-result/save-surveys-controller-factory'
import { makeLoadSurveyResultController } from '../factories/controller/survey-result/load-survey-result/load-surveys-controller-factory'
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { auth } from '../middlewares/auth'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', auth, adaptRoute(makeSaveSurveyResultController()))
  router.get('/surveys/:surveyId/results', auth, adaptRoute(makeLoadSurveyResultController()))
}
