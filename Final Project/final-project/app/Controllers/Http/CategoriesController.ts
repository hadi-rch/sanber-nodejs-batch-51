import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema} from '@ioc:Adonis/Core/Validator'
import Category from 'App/Models/Category'

export default class CategoriesController {    
    public async store({request, response}: HttpContextContract) {
        const newCategoriesSchema = schema.create({
            name: schema.string()
        })
        const newCategoriesPayload = await request.validate({schema: newCategoriesSchema})
        try {
            await Category.create(newCategoriesPayload)
            return response.created({
                message: "Berhasil tambah categories"
            })
        } catch (error) {
            const input = newCategoriesPayload.name
            response.badRequest({
                message: `Kategori ${input} sudah ada`,
              })
        }
    }
    public async index({ response}: HttpContextContract) {
        try {
            const categories = await Category
            .query()
            .orderBy('created_at', 'asc') //get data secara ascending [a-z]
            if (categories.length > 0) {
            return response.created({
                message: "Tampil Semua Data Categories",
                data: categories
            })}
        } catch (error) {
            response.badRequest({
                message: "Data tidak ditemukan",
              })
        }
}
    public async show({response, params}: HttpContextContract) {
        try {
            const categoris = await Category
            .query()
            .where('id', params.id)
            .preload('books')
            .firstOrFail()
            return response.ok({
                message: "Tampil Detail Data Categories",
                data: categoris
            })
        } catch (error) {
            response.badRequest({
                message: "Data tidak ditemukan",
              })
        }
    }
        public async update({response, params, request}: HttpContextContract) {
            try {
                const  updateCategoriesSchema = schema.create({name: schema.string()})
                const updateCategoriesPayload = await request.validate({schema: updateCategoriesSchema})
                const data = await Category.findOrFail(params.id)
                await data.merge(updateCategoriesPayload).save()
                return response.ok({
                      message: 'Berhasil Mengupdate',
                })
            } catch (error) {
                return response.notFound({
                    message: 'data tidak ditemukan',
                  })
            }
    }
    public async destroy({response, params}: HttpContextContract) {
        try {
        const category = await Category.findOrFail(params.id)
        await category.delete()

        return response.ok({
            message: "Berhasil Delete Categories"
        })
    } catch (error) {
        return response.notFound({
            message: 'data tidak ditemukan',
          })
        }
    }
}
