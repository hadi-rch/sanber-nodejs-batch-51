import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'borrows'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('buku_id').unsigned().references('books.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.unique(['user_id', 'buku_id '])
      table.date('tanggal_pinjam')
      table.date('tanggal_kembali')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
