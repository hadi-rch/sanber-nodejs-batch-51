import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Borrow from 'App/Models/Borrow'
import BorrowValidator from 'App/Validators/BorrowValidator'

export default class BorrowsController {
    public async index ({response}: HttpContextContract){
        try {
        const allBorrow = await Borrow
        .query()
        .preload('book')
        .preload('user')
        return response.ok({
            message: "Success fetch Borrows", 
            data: allBorrow
        })
    } catch (error) {
        return response.badRequest({
          message: "Data Peminjaman gagal ditampilkan",
          error: error.messages,
        });
      }
    }

    public async store({request, response, auth, params}: HttpContextContract){
        const userid = auth.user?.id
        const paramid = params.id
        const payload = await request.validate(BorrowValidator)
        
        try {
            let TPtoISo = payload.tanggal_pinjam
            const [month, day, year] = TPtoISo.split('-');
            const dates = new Date(+year, +month -1, +day)
            let sbt = dates.toISOString()
            let TglPinjamNew = sbt.substring(0,10)

            let news = payload.tanggal_kembali
            const [bulan, hari, tahun] = news.split('-');
            const datesNew = new Date(+tahun, +bulan -1, +hari)
            let substr = datesNew.toISOString()
            let TglKembaliNew = substr.substring(0,10)
        
            const data = {
                user_id: userid,
                buku_id: paramid,
                tanggal_pinjam: TglPinjamNew,
                tanggal_kembali: TglKembaliNew,
              }
              await Borrow.create(data)
            return response.created({message: "BERHASIL MELAKUKAN PEMINJAMAN"})
        } catch (error) {
            console.log(error)
            if(error.guard){
                return response.badRequest({message: 'GAGAL MELAKUKAN PEMINJAMAN',error: error.messages})
            } else{
                return response.badRequest({message: 'GAGAL MELAKUKAN PEMINJAMAN',error: error.message})
            }
        }
    }
    public async show({ response, params }: HttpContextContract) {
        const data = await Borrow.query()
          .where('id', params.id)
          .preload('user')
          .preload('book', (buku) => {
            buku.preload('category')
          })
          if(data.length !== 0){
          return response.ok({
            message: 'Berhasil Mendapatkan data',
            data: data,
          })
        }
        return response.notFound({
          message: 'data tidak ditemukan',
        })
      }
    
}
