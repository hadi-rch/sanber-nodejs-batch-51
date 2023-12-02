import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class User {
  public async handle({auth, response}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const users = auth.user?.role === 'user'

    if (users) {
      await next()
    } else {
    return response.unauthorized({
      message: 'anda tidak bisa mengakses',
    }
    )}
  }
}
