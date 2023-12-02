import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema, rules} from '@ioc:Adonis/Core/Validator'
import Book from 'App/Models/Book'


export default class BooksController {    
    public async store({request, response}: HttpContextContract) {
        const newBooksSchema = schema.create({
            kategori_id: schema.number([rules.exists({table: 'categories',column: 'id'})]),
            judul: schema.string(),
            ringkasan: schema.string(),
            tahun_terbit: schema.number([rules.range(1950, 2024)]),
            halaman: schema.number([rules.range(30, 1000)]),
        })
        const newBooksPayload = await request.validate({schema: newBooksSchema})
        await Book.create(newBooksPayload)

        return response.created({
            message: "Berhasil tambah Buku"
        })
    }
    public async index({response}: HttpContextContract) {
        const books = await Book
            .query()
            .orderBy('created_at', 'asc') //get data secara ascending [a-z]

        return response.ok({
            message: "Berhasil Tampil Semua Buku",
            data: books
        })
    }
    public async show({response, params}: HttpContextContract) {
        const books = await Book
        .query()
        .where('id', params.id)
        .select(
            "id",
            "judul",
            "ringkasan",
            "tahun_terbit",
            "halaman",
            "kategori_id"
          )
        .preload("category", (query) => {
            query.select("name");
        })
  
        .preload("borrow", (query) => {
            query.select(
              "id",
              "buku_id",
              "tanggal_pinjam",
              "tanggal_kembali",
              "user_id"
            );
          })
          .firstOrFail();
          console.log(books, "lklo")
        if (books.$attributes?.id !== null){
            return response.ok({
                message: "Tampil Detail Data Books",
                data: books
            })
        }
        return response.notFound({
            message: `data dengan id ${params.id} tidak ditemukan`,
        })
    }
    public async update({response, params, request}: HttpContextContract) {
        const updateBooksSchema = schema.create({
            kategori_id: schema.number.optional([rules.exists({table: 'categories',column: 'id'})]),
            judul: schema.string.optional(),
            ringkasan: schema.string.optional(),
            tahun_terbit: schema.number.optional([rules.range(1950, 2024)]),
            halaman: schema.number.optional([rules.range(30, 1000)]),
        })
        const updateBooksPayload = await request.validate({schema: updateBooksSchema})
        const book = await Book.findOrFail(params.id)
        book.kategori_id = updateBooksPayload.kategori_id
        book.judul = updateBooksPayload.judul
        book.ringkasan = updateBooksPayload.ringkasan
        book.tahun_terbit = updateBooksPayload.tahun_terbit
        book.halaman = updateBooksPayload.halaman
        
        await book.save()

        return response.created({
            message: "Berhasil Update Books"
        })
    }
    public async destroy({response, params}: HttpContextContract) {
        const deleteBook = await Book.findOrFail(params.id)
        await deleteBook.delete()

        return response.ok({
            message: "Berhasil Delete Buku"
        })
    }
}
