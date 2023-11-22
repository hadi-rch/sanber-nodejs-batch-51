import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CategoryValidator from 'App/Validators/CategoryValidator'

export default class CategoriesController {    
    public async store({request, response}: HttpContextContract) {
      
        await request.validate(CategoryValidator)
        return response.ok({
            message: "Success"
        })
}}
