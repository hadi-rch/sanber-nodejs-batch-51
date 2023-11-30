import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, ManyToMany, belongsTo, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'
import User from './User'

export default class Book extends BaseModel {
  public static table = 'books'

  @column({ isPrimary: true })
  public id: number

  @column()
  public kategori_id: number | undefined

  @column()
  public judul: string | undefined

  @column()
  public ringkasan: string | undefined

  @column()
  public tahun_terbit: number | undefined

  @column()
  public halaman: number | undefined

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>

  @manyToMany(() => User, {
    pivotTable: 'borrows'
  })
  public users: ManyToMany<typeof User>
}
