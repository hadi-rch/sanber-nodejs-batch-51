import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, ManyToMany, belongsTo, column, hasMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'
import User from './User'
import Borrow from './Borrow'

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

  @belongsTo(() => Category, {
    foreignKey: "kategori_id"
  })
  public category: BelongsTo<typeof Category>

  @manyToMany(() => User, {
    localKey: "id",
    pivotForeignKey: "buku_id",
    relatedKey: "id",
    pivotRelatedForeignKey: "user_id",
    pivotTable: "borrows",
  })
  public borrows: ManyToMany<typeof User>;

  @hasMany(() => Borrow, {
    foreignKey: "buku_id",
  })
  public borrow: HasMany<typeof Borrow>;
}
