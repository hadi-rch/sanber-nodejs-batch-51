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
        let id = params?.id;
        console.log(id);
        try {
            const showGenre = await Database.query()
                .from("genres")
                .where({ id })
                .first();
            if (!showGenre) {
                throw new Error(`Data ${id} Tidak tersedia`);
            }
            const showGame = await Database.query()
                .from("games")
                .where("genres_id", showGenre.id);
            const newReponse = {
                id: showGenre.id,
                name: showGenre.name,
                games: showGame.map((game) => ({
                id: game.id,
                title: game.title,
                gameplay: game.gameplay,
                release_date: game.release_date,
                })),
            };
            return response.ok({
                message: `Berhasil Query Genre Id ${id}`,
                data: newReponse,
            });
        } catch (err) {
            return response.badRequest({
                message: `Gagal Get Genre Id ${id}`,
                error: `${err}`,
        });
        }
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
