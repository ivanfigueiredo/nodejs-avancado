import { AccessDeniedError } from './../errors/access-denied-error'
import { forbidden } from './../helpers/http/http-helper'
import { HttpRequest, HttpResponse, Middleware } from '../protocols'

export class AuthMiddleware implements Middleware {
  handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = forbidden(new AccessDeniedError())
    return new Promise(resolve => resolve(error))
  }
}
