import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return new Promise(resolve => resolve('hash'))
  }
}))

const salt = 12
const makeSult = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('', () => {
  test('Should call bcrypt with correct values', async () => {
    const sut = makeSult()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('Should return a hash on success', async () => {
    const sut = makeSult()
    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('hash')
  })

  test('Should return a hash on success', async () => {
    const sut = makeSult()
    jest.spyOn(bcrypt, 'hash').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.encrypt('any_value')
    await expect(promise).rejects.toThrow()
  })
})
