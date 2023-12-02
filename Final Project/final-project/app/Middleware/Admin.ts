import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Admin {
  public async handle({auth, response}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const admin = auth.user?.role === 'admin'

    if (admin) {
      await next()
    }else {
      return response.unauthorized({
        message: 'anda tidak bisa mengakses',
    })}
  }
}
