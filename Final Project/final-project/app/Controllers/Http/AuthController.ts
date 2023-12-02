import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserValidator from 'App/Validators/UserValidator'
import User from 'App/Models/User'
import {schema} from '@ioc:Adonis/Core/Validator'
import ProfileValidator from 'App/Validators/ProfileValidator'
import Mail from '@ioc:Adonis/Addons/Mail'
import Database from '@ioc:Adonis/Lucid/Database'

export default class AuthController {
    public async register({request, response}: HttpContextContract){
        try {
            const data = await request.validate(UserValidator)

            const newUser =  await User.create(data)
            const otpCode = Math.floor(100000 + Math.random() * 900000);

            await Database.table("otp_codes").insert({
                otpCode: otpCode,
                user_id: newUser.id,
            });

            await Mail.send((message) => {
                message
                  .from("adifender3@gmail.com")
                  .to(data.email)
                  .subject("Welcome Onboard!")
                  .htmlView("emails/welcome", { otpCode });
              });
        

            return response.created({message: 'Registered success, please verify your otp code'})
        } catch (error) {
            return response.unprocessableEntity({message: error.messages})
        }
    }
    public async login({request, response, auth}: HttpContextContract){
        try {
            const userSchema = schema.create({
                email: schema.string(),
                password: schema.string()
            })

            await request.validate({schema: userSchema})
            const email = request.input('email')
            const password = request.input('password')


            const token = await auth.use('api').attempt(email, password)
            return response.ok({message: 'Login successful', token})
        } catch (error) {
            if(error.guard){
                return response.badRequest({message: 'login error',error: error.message})
            } else{
                return response.badRequest({message: 'login error',error: error.messages})

            }
        }
    }
    public async profile({ request, response, auth }: HttpContextContract) {
        try {
          const user = auth.user    
          const datas = await request.validate(ProfileValidator)    
          await user?.related('profile').updateOrCreate({}, datas)    
          return response.created({
            message: 'Berhasil Mengupdate Profile',
          })
        } catch (error) {
          return response.badRequest({
            message: error,
          })
        }
      }
    public async otpConfirmation({request, response} : HttpContextContract){
        let otpCode = request.input('otpCode')
        let email = request.input('email')
        let user = await User.findBy('email', email)
        let otpCheck = await Database.query().from('otp_codes').where('otpCode',otpCode).first()

        if(user?.id == otpCheck.user_id){
            user!.isVerified = true
            await user?.save()
            return response.status(200).json({message: "Berhasil konfirmasi otp"})
        }else {
            return response.status(400).json({message: "Gagal verifikasi otp"})
        }
    }
}
