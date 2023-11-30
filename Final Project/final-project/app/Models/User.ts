import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, hasOne, HasOne, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Profile from './Profile'
import Hash from '@ioc:Adonis/Core/Hash'
import Book from './Book'

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
}
