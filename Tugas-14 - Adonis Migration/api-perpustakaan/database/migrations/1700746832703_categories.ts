import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'categories'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 45).unique().notNullable()

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
