import { DateTime } from 'luxon'
import { BaseModel, 
  BelongsTo, 
  belongsTo, 
  // BelongsTo, belongsTo, 
  column } from '@ioc:Adonis/Lucid/Orm'
import Book from './Book'
import User from './User'
// import User from './User'

export default class Borrow extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public buku_id: number
  
  @column()
  public tanggal_pinjam: string
  
  @column()
  public tanggal_kembali: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Book, {
    foreignKey: "buku_id",
  })
  public buku: BelongsTo<typeof Book>;

  @belongsTo(() => User, {
    foreignKey: "user_id",
  })
  public user: BelongsTo<typeof User>;

}
