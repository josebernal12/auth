import { ResponseApi } from "../../helpers/response/response";
import Auth from "../../models/auth/AuthModel";
import { ResponseType } from "../../types/response/response.types";
import { UserAuth, UserType } from "../../types/user/user.type";
import { UserUtils } from "../../utils/user/user";

export class UserService {
    //TODO REVISAR SI LO REGRESAMOS A COMO ESTABA ANTES
    static async getAll(name: RegExp | null, showAll: number | null, quantity: number | null): Promise<ResponseType<UserType>> {
        try {
            const { error, data, message, status } = await UserUtils.getAll(name, showAll, quantity)
            return ResponseApi.success<UserAuth>({ error, data, message, status })
        } catch (error) {
            return ResponseApi.error(true, 'entro al catch', 500)
        }
    }

    static async getById(id: string): Promise<ResponseType<UserAuth>> {
        try {
            if (id) {
                const user = await Auth.findById(id)
                if (user) {
                    return ResponseApi.success<UserAuth>({ error: false, data: user, message: "usuario encontrado", status: 200 })
                }
                return ResponseApi.error(true, 'no hay usuarios con ese id', 404)
            }
            return ResponseApi.error(true, 'no existe id', 404)
        } catch (error) {
            return ResponseApi.error(true, 'entro al catch', 500)
        }
    }

}