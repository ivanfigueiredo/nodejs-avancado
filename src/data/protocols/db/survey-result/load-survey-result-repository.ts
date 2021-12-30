import { SurveyResultModel } from '@/domain/models/survey-result'

export interface LoadSurveyResultRepository {
  loadBySurveyById (surveyId: string): Promise<SurveyResultModel>
}
