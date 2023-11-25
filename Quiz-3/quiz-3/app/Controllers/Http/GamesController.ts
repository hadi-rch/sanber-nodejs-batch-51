import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema, rules} from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'


export default class GamesController {    
    public async store({request, response}: HttpContextContract) {
        const newGamesSchema = schema.create({
            genres_id: schema.number([rules.exists({table: 'genres',column: 'id'})]),
            title: schema.string(),
            gameplay: schema.string(),
            release_date: schema.string()
        })
        const newGamesPayload = await request.validate({schema: newGamesSchema})
        await Database
        .insertQuery() // 👈 gives an instance of insert query builder
        .table('games')
        .insert(newGamesPayload)

        return response.created({
            message: "Berhasil tambah Games"
        })
    }
    public async index({response}: HttpContextContract) {
        const Games = await Database
        .query()
        .from('games')
        .select('*')

        return response.ok({
            message: "Berhasil Tampil Semua Games",
            data: Games
        })
    }
    public async show({response, params}: HttpContextContract) {
        const Games = await Database
            .from('games')
            .where('id',params.id)
            .firstOrFail() 

        return response.ok({
            message: "Tampil Detail Data Games",
            data: Games
        })
    }
    public async update({response, params, request}: HttpContextContract) {
        const  updateGamesSchema = schema.create({
            genres_id: schema.number([rules.exists({table: 'genres',column: 'id'})]),
            title: schema.string(),
            gameplay: schema.string(),
            release_date: schema.string()
        })
        const updateGamesPayload = await request.validate({schema: updateGamesSchema})
        await Database
        .from('games')
        .where('id',params.id)
        .update(updateGamesPayload)

        return response.created({
            message: "Berhasil Update Games"
        })
    }
    public async destroy({response, params}: HttpContextContract) {
        await Database
            .from('games')
            .where('id',params.id)
            .delete()

        return response.ok({
            message: "Berhasil Delete games"
        })
    }
}
