import { mockSurveyModel } from './../../../../domain/test/mock-survey'
import { LoadSurveyById } from './../../../../domain/usecases/survey/load-survey-by-id'
import { SurveyModel } from './../../../../domain/models/survey'
import { LoadSurveyResultController } from './load-survey-result-controller'
import { HttpRequest } from './load-survey-result-controller-protocols'

const makeFakeRequest = (): HttpRequest => ({
  params: {
    surveyId: 'any_id'
  }
})

describe('LoadSurveyResult Controller', () => {
  test('Should call LoadSurveyById with correct value', async () => {
    class LoadSurveyByIdStub implements LoadSurveyById {
      async loadById (id: string): Promise<SurveyModel> {
        return new Promise(resolve => resolve(mockSurveyModel()))
      }
    }
    const loadSurveyByIdStub = new LoadSurveyByIdStub()
    const sut = new LoadSurveyResultController(loadSurveyByIdStub)
    const loadByIdSpy = jest.spyOn(loadSurveyByIdStub, 'loadById')
    await sut.handle(makeFakeRequest())
    expect(loadByIdSpy).toHaveBeenCalledWith('any_id')
  })
})
