import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Profile';

export default class ProfilesController {
    public async store({response, request, auth}: HttpContextContract){
        const bio = request.input('bio');
        const alamat = request.input('alamat');
        Profile.updateOrCreate({
            user_id: auth.user?.id
        },{
            bio: bio,
            alamat: alamat
        })
        return response.created({message:"Profile Created"})
    }
}
