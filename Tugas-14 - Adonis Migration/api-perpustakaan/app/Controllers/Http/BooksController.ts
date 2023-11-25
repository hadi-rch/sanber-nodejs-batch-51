import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema, rules} from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'


export default class BooksController {    
    public async store({request, response}: HttpContextContract) {
        const newBooksSchema = schema.create({
            kategori_id: schema.number([rules.exists({table: 'categories',column: 'id'})]),
            judul: schema.string(),
            ringkasan: schema.string(),
            tahun_terbit: schema.string(),
            halaman: schema.number(),
        })
        const newBooksPayload = await request.validate({schema: newBooksSchema})
        await Database
        .insertQuery() // 👈 gives an instance of insert query builder
        .table('books')
        .insert(newBooksPayload)

        return response.created({
            message: "Berhasil tambah Buku"
        })
    }
    public async index({response}: HttpContextContract) {
        const books = await Database
        .query()
        .from('books')
        .select('*')

        return response.ok({
            message: "Berhasil Tampil Semua Buku",
            data: books
        })
    }
    public async show({response, params}: HttpContextContract) {
        const books = await Database
            .from('books')
            .where('id',params.id)
            .firstOrFail() 

        return response.ok({
            message: "Tampil Detail Data Books",
            data: books
        })
    }
    public async update({response, params, request}: HttpContextContract) {
        const  updateBooksSchema = schema.create({
            kategori_id: schema.number([rules.exists({table: 'categories',column: 'id'})]),
            judul: schema.string(),
            ringkasan: schema.string(),
            tahun_terbit: schema.string.optional(),
            halaman: schema.number(),
        })
        const updateBooksPayload = await request.validate({schema: updateBooksSchema})
        await Database
        .from('books')
        .where('id',params.id)
        .update(updateBooksPayload)

        return response.created({
            message: "Berhasil Update Books"
        })
    }
    public async destroy({response, params}: HttpContextContract) {
        await Database
            .from('books')
            .where('id',params.id)
            .delete()

        return response.ok({
            message: "Berhasil Delete Categories"
        })
    }
}
