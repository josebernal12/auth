import { ResponseApi } from "../../helpers/response/response";
import Auth from "../../models/auth/AuthModel";
import { ResponseType } from "../../types/response/response.types";
import { UserAuth, UserType } from "../../types/user/user.type";

export class UserService {

    static async getAll(name: RegExp, showAll: number, quantity: number): Promise<ResponseType<UserType>> {
        try {
            if (name) {
                const users = await Auth.find({ name }).limit(quantity)
                return ResponseApi.success<UserAuth>({ error: false, data: users, message: "usuarios encontrados", status: 200 })
            }
            if(showAll) {
                const users = await Auth.find()
                return ResponseApi.success<UserAuth>({ error: false, data: users, message: "usuarios encontrados", status: 200 })
            }
            if(quantity){
                const users = await Auth.find().limit(quantity)
                return ResponseApi.success<UserAuth>({ error: false, data: users, message: "usuarios encontrados", status: 200 })
            }
            return ResponseApi.error(true, 'error al buscar usuarios', 404)
        } catch (error) {
            return ResponseApi.error(true, 'entro al catch', 500)
        }
    }
}