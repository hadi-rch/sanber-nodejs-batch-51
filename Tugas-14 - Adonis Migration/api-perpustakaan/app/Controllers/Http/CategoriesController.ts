import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema} from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class CategoriesController {    
    public async store({request, response}: HttpContextContract) {
      
        const  newCategoriesSchema = schema.create({
            name: schema.string()
        })
        const newCategoriesPayload = await request.validate({schema: newCategoriesSchema})
        await Database
        .insertQuery() // 👈 gives an instance of insert query builder
        .table('categories')
        .insert(newCategoriesPayload)

        return response.created({
            message: "Berhasil tambah categories"
        })
    }
    public async index({request, response}: HttpContextContract) {
        const categories = await Database
            .query()  // 👈 gives an instance of select query builder
            .from('categories')
            .select('*')

            return response.created({
                message: "Tampil Semua Data Categories",
                data: categories
            })
    }
    public async show({response, params}: HttpContextContract) {
        const category = await Database
            .from('categories')
            .where('id',params.id)
            .firstOrFail() 

        return response.ok({
            message: "Tampil Detail Data Categories",
            data: category
        })
    }
    public async update({response, params, request}: HttpContextContract) {
        const  updateCategoriesSchema = schema.create({
            name: schema.string()
        })
        const updateCategoriesPayload = await request.validate({schema: updateCategoriesSchema})
        await Database
        .from('categories')
        .where('id',params.id)
        .update(updateCategoriesPayload)

        return response.created({
            message: "Berhasil Update Categories"
        })
    }
    public async destroy({response, params}: HttpContextContract) {
        await Database
            .from('categories')
            .where('id',params.id)
            .delete()

        return response.ok({
            message: "Berhasil Delete Categories"
        })
    }
}
