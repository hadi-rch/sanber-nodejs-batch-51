import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 45).unique().notNullable()
      table.string('email', 45).unique().notNullable()
      table.string('password', 45).notNullable()
      table.enum('role', ["user", "admin"]).notNullable().defaultTo("user")

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
          table.timestamp('created_at', { useTz: true })
          table.timestamp('updated_at', { useTz: true })
       */
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
