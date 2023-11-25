import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'games'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('genres_id')
      .unsigned()
      .references('genres.id')
      .onDelete('CASCADE') // delete profile when user is deleted
      .onUpdate('CASCADE')
    table.string('title').notNullable()
    table.text('gameplay').notNullable()
    table.string('release_date').notNullable()

      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
