import { mockSurveyResultModel } from './../../../domain/test/mock-survey-result'
import { SurveyResultModel } from './../../../domain/models/survey-result'
import { LoadSurveyResultRepository } from '../../protocols/db/survey-result/load-survey-result-repository'
import { DbLoadSurveyResult } from './db-load-survey-result'

describe('DbLoadSurveyResult UseCase ', () => {
  test('Should call LoadSurveyResultRepository', async () => {
    class LoadSurveyResultRepositoryStub implements LoadSurveyResultRepository {
      async loadBySurveyById (surveyId: string): Promise<SurveyResultModel> {
        return new Promise(resolve => resolve(mockSurveyResultModel()))
      }
    }
    const loadSurveyResultRepositoryStub = new LoadSurveyResultRepositoryStub()
    const sut = new DbLoadSurveyResult(loadSurveyResultRepositoryStub)
    const loadBySurveyByIdSpy = jest.spyOn(loadSurveyResultRepositoryStub, 'loadBySurveyById')
    await sut.load('any_survey_id')
    expect(loadBySurveyByIdSpy).toHaveBeenCalledWith('any_survey_id')
  })
})
