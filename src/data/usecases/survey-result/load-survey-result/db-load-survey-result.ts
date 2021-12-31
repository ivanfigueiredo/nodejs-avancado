import { LoadSurveyResultRepository, LoadSurveyResult, SurveyResultModel, LoadSurveyByIdRepository } from './db-load-survey-result-protocols'

export class DbLoadSurveyResult implements LoadSurveyResult {
  constructor (
    private readonly loadSurveyResultRepository: LoadSurveyResultRepository,
    private readonly loadSurveyByIdtRepository: LoadSurveyByIdRepository
  ) {}

  async load (surveyId: string): Promise<SurveyResultModel> {
    const surveyResult = await this.loadSurveyResultRepository.loadBySurveyById(surveyId)
    if (!surveyResult) {
      await this.loadSurveyByIdtRepository.loadById(surveyId)
    }
    return surveyResult
  }
}
