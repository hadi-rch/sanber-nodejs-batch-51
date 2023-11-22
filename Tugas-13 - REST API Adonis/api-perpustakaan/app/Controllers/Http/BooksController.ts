import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BookValidator from 'App/Validators/BookValidator'


export default class BooksController {    
    public async store({request, response}: HttpContextContract) {
      
    await request.validate(BookValidator)
    return response.ok({
        message: "Success"
    })
}}
