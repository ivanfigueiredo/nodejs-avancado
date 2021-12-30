import { mockSurveyResultModel } from './../../../domain/test/mock-survey-result'
import { SurveyResultModel } from './../../../domain/models/survey-result'
import { LoadSurveyResultRepository } from '../../protocols/db/survey-result/load-survey-result-repository'
import { DbLoadSurveyResult } from './db-load-survey-result'

interface SutTypes {
  sut: DbLoadSurveyResult
  loadSurveyResultRepositoryStub: LoadSurveyResultRepository
}

const mockLoadSurveyResultRepository = (): LoadSurveyResultRepository => {
  class LoadSurveyResultRepositoryStub implements LoadSurveyResultRepository {
    async loadBySurveyById (surveyId: string): Promise<SurveyResultModel> {
      return new Promise(resolve => resolve(mockSurveyResultModel()))
    }
  }
  return new LoadSurveyResultRepositoryStub()
}

const makeSut = (): SutTypes => {
  const loadSurveyResultRepositoryStub = mockLoadSurveyResultRepository()
  const sut = new DbLoadSurveyResult(loadSurveyResultRepositoryStub)
  return {
    sut,
    loadSurveyResultRepositoryStub
  }
}

describe('DbLoadSurveyResult UseCase ', () => {
  test('Should call LoadSurveyResultRepository', async () => {
    const { sut, loadSurveyResultRepositoryStub } = makeSut()
    const loadBySurveyByIdSpy = jest.spyOn(loadSurveyResultRepositoryStub, 'loadBySurveyById')
    await sut.load('any_survey_id')
    expect(loadBySurveyByIdSpy).toHaveBeenCalledWith('any_survey_id')
  })
})
