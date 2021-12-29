import { AddSurveyRepository } from './db-add-survey-protocols'
import { DbAddSurvey } from './db-add-survey'
import { throwError, mockSurveyData } from '../../../../domain/test/'
import { mockAddSurveyRepository } from '../../../../data/test/'

interface SutTypes {
  sut: DbAddSurvey
  addSurveyRepository: AddSurveyRepository
}

const makeSut = (): SutTypes => {
  const addSurveyRepository = mockAddSurveyRepository()
  const sut = new DbAddSurvey(addSurveyRepository)
  return {
    sut,
    addSurveyRepository
  }
}

describe('DbAddSurvey UseCase', () => {
  test('Should call AddSurveyRepository with correct values', async () => {
    const { sut, addSurveyRepository } = makeSut()
    const addSpy = jest.spyOn(addSurveyRepository, 'add')
    const surveyData = mockSurveyData()
    await sut.add(surveyData)
    expect(addSpy).toHaveBeenCalledWith(surveyData)
  })

  test('Should throw if Hasher throws', async () => {
    const { sut, addSurveyRepository } = makeSut()
    jest.spyOn(addSurveyRepository, 'add').mockImplementationOnce(throwError)
    const promise = sut.add(mockSurveyData())
    await expect(promise).rejects.toThrow()
  })
})
