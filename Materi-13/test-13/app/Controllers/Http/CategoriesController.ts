import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CategoriesController {
    public async index({request, response, params}: HttpContextContract) {
        let name = request.qs.name
        response.status(200).json({name, b: params.b})
    }
}

