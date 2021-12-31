import { mockSurveyResultModel } from '../../domain/test'
import { LoadSurveyResultRepository } from '../protocols/db/survey-result/load-survey-result-repository'
import { SaveSurveyResultRepository } from '../protocols/db/survey-result/save-survey-result-repository'
import { SaveSurveyResultParams, SurveyResultModel } from '../usecases/survey-result/save-survey-result/db-save-survey-result-protocols'

export const mockSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (data: SaveSurveyResultParams): Promise<void> {
      return new Promise(resolve => resolve())
    }
  }
  return new SaveSurveyResultRepositoryStub()
}

export const mockLoadSurveyResultRepository = (): LoadSurveyResultRepository => {
  class LoadSurveyResultRepositoryStub implements LoadSurveyResultRepository {
    async loadBySurveyById (surveyId: string): Promise<SurveyResultModel> {
      return new Promise(resolve => resolve(mockSurveyResultModel()))
    }
  }
  return new LoadSurveyResultRepositoryStub()
}
