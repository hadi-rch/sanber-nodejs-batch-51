import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('kategori_id')
        .unsigned()
        .references('categories.id')
        .onDelete('CASCADE') // delete profile when user is deleted
        .onUpdate('CASCADE')
      table.string('judul').notNullable()
      table.text('ringkasan').notNullable()
      table.string('tahun_terbit', 45).notNullable()
      table.integer('halaman')

      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
