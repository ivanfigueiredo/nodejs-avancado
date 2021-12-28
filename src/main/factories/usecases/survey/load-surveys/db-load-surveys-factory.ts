import { DbLoadSurveys } from '../../../../../data/usecases/survey/load-surveys/db-load-surveys'
import { LoadSurveys } from '../../../../../domain/usecases/survey/load-surveys'
import { SurveyMongoRepository } from '../../../../../infra/db/mongodb/survey/survey-mongo-repository'

export const makeDbLoadSurveys = (): LoadSurveys => {
  const surveysMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveys(surveysMongoRepository)
}
