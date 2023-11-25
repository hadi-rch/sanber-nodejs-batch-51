import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BookValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string([ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string([
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    judul: schema.string([rules.minLength(4)]), //minimal input 4 karakter
    ringkasan: schema.string([rules.minLength(15)]), //minimal input 15 karakter
    tahun_terbit: schema.date.nullable({format: 'yyyy'}), // input wajib number && 4 digit
    halaman: schema.number([rules.unsigned(),rules.range(10, 1000)]) // input >= 10 karakter && input <= 1000 karakter
    // Judul Buku (required,string)
    // Ringkasa Buku (required, string)
    // Tahun_terbit (required, number)
    // halaman (required, number)
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
public messages: CustomMessages = {
    required: 'inputan {{field}} harus diisi tidak boleh kosong',
    'minLength': 'min karakter di inputan {{ field }} tidak boleh kurang dari {{options.minLength}} karakter',
  }
}
