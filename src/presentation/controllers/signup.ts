import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-erros'
import { badRequest } from '../helpers/http-helpers'

export class SignUpController {
  handler (httpRequest: HttpRequest): HttpResponse {
    const requireFields = ['name', 'email']
    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    return badRequest(new MissingParamError('name and email'))
  }
}
