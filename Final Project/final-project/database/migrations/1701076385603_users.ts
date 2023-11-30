import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nama', 45).notNullable()
      table.string('email', 45).unique().notNullable()
      table.string('password', 255).notNullable()
      table.enum('role', ["user", "admin"]).notNullable().defaultTo("user")
      table.string('remember_me_token').nullable()
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
