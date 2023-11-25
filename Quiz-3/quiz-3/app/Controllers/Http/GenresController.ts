import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema} from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class GenresController {
    public async store({request, response}: HttpContextContract) {
      
        const  newGenresSchema = schema.create({
            name: schema.string()
        })
        const newGenresPayload = await request.validate({schema: newGenresSchema})
        await Database
        .insertQuery() // 👈 gives an instance of insert query builder
        .table('genres')
        .insert(newGenresPayload)

        return response.created({
            message: "Berhasil tambah Genres"
        })
    }
    public async index({request, response}: HttpContextContract) {
        const Genres = await Database
            .query()  // 👈 gives an instance of select query builder
            .from('genres')
            .select('*')

            return response.created({
                message: "Tampil Semua Data Genres",
                data: Genres
            })
    }
    public async show({response, params}: HttpContextContract) {
        const category = await Database
            .from('genres')
            .where('id',params.id)
            .firstOrFail() 

        return response.ok({
            message: "Tampil Detail Data Genres",
            data: category
        })
    }
    public async update({response, params, request}: HttpContextContract) {
        const  updateGenresSchema = schema.create({
            name: schema.string()
        })
        const updateGenresPayload = await request.validate({schema: updateGenresSchema})
        await Database
        .from('genres')
        .where('id',params.id)
        .update(updateGenresPayload)

        return response.created({
            message: "Berhasil Update Genres"
        })
    }
    public async destroy({response, params}: HttpContextContract) {
        await Database
            .from('genres')
            .where('id',params.id)
            .delete()

        return response.ok({
            message: "Berhasil Delete Genres"
        })
    }
}
