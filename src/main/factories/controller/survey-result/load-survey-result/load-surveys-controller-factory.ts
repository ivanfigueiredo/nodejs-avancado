import { makeDbLoadSurveysById } from '../../../usecases/survey/load-survey-by-id/db-load-surveys-by-id-factory'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'
import { LoadSurveyResultController } from '../../../../../presentation/controllers/survey-result/load-survey-result/load-survey-result-controller'
import { makeDbLoadSurveyResult } from '../../../../../main/factories/usecases/survey-result/load-survey-result/db-load-survey-result-factory'

export const makeLoadSurveyResultController = (): Controller => {
  const controller = new LoadSurveyResultController(makeDbLoadSurveysById(), makeDbLoadSurveyResult())
  return makeLogControllerDecorator(controller)
}
