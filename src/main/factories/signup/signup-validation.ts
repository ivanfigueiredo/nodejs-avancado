import { EmailValidatorAdapter } from '../../../utils/email-validator-adapter'
import { ValidationComposite } from '../../../presentation/helpers/validators/validation-composite'
import { RequiredFieldsValidation } from '../../../presentation/helpers/validators/required-field-validation'
import { Validation } from '../../../presentation/helpers/validators/validation'
import { CompareFieldsValidation } from '../../../presentation/helpers/validators/compare-fields-validation'
import { EmailValidation } from '../../../presentation/helpers/validators/email-validation'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
  for (const field of requiredFields) {
    validations.push(new RequiredFieldsValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
