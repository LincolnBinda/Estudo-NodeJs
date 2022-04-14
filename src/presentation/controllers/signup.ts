import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-erros'
import { badRequest } from '../helpers/http-helpers'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handler (httpRequest: HttpRequest): HttpResponse {
    const requireFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    return badRequest(new MissingParamError('name and email'))
  }
}
