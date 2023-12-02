import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, HasMany, hasMany, hasOne, HasOne, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Profile from './Profile'
import Hash from '@ioc:Adonis/Core/Hash'
import Book from './Book'
import Borrow from './Borrow'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public nama: string

  @column()
  public email: string
  
  @column({serializeAs: null})
  public password: string
  
  @column()
  public role: string | undefined

  @column()
  public isVerified: boolean
  
  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User){
    if(user.$dirty.password){
      user.password = await Hash.make(user.password)
    }
  }

  @hasOne(() => Profile, {
    foreignKey: "user_id"
  })
  public profile: HasOne<typeof Profile>

  @manyToMany(() => Book, {
    pivotTable: 'borrows'
  })
  public books: ManyToMany<typeof Book>

  @manyToMany(() => Book, {
    localKey: "id",
    pivotForeignKey: "buku_id",
    relatedKey: "id",
    pivotRelatedForeignKey: "buku_id",
    pivotTable: "borrows",
  })
  public borrows: ManyToMany<typeof Book>;

  @hasMany(() => Borrow, {
    foreignKey: "user_id",
  })
  public users: HasMany<typeof Borrow>;
}
