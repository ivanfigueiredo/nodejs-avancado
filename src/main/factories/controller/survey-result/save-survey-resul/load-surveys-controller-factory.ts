import { makeDbSaveSurveyResult } from './../../../usecases/survey-result/save-survey-result/db-save-survey-result-factory'
import { makeDbLoadSurveysById } from '../../../usecases/survey/load-survey-by-id/db-load-surveys-by-id-factory'
import { SaveSurveyResultController } from './../../../../../presentation/controllers/survey-result/save-survey-result/save-survey-result-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'

export const makeSaveSurveyResultController = (): Controller => {
  const controller = new SaveSurveyResultController(makeDbLoadSurveysById(), makeDbSaveSurveyResult())
  return makeLogControllerDecorator(controller)
}
