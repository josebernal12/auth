import { generateToken } from "../helpers/generateToken"
import { Helper } from "../helpers/helper"
import { Validate } from "../helpers/validation"
import Auth from "../models/AuthModel"
import { ResponseType } from "../types/response.types"
import { UserType } from "../types/user.type"

export class AuthService {

  static createUser = async (name: string, email: string, password: string): Promise<ResponseType<UserType>> => {
    try {

      const exist = await Validate.existEmail(email)
      if (exist) {
        const hash = Helper.hashPassword(password)
        const newUser = await Auth.create({ name, email, password: hash })
        if (!newUser) {
          return {
            error: true,
            message: 'error al registrar el usuario',
            status: 404
          }
        }
        const token = generateToken({ _id: newUser._id })
        return {
          error: false,
          message: 'se ha registrado exitosamente',
          data: [newUser],
          token,
          status: 200
        }
      }

      return {
        error: true,
        message: 'ya existe el email',
        status: 404
      }
    } catch (error) {
      return {
        error: true,
        message: 'entro al catch',
        status: 500
      }

    }
  }

  static login = async (email: string, password: string): Promise<ResponseType<UserType>> => {
    try {
      const exist = await Validate.existEmail(email)
      if (exist) {
        const user = await Auth.findOne({ email })
        const isValid = Helper.compareHash(password, user.password)
        if (isValid) {
          const token = generateToken({ _id: user._id })
          return {
            error: false,
            message: 'login exitosamente!',
            data: [user],
            token,
            status: 200
          }
        }
        return {
          error: true,
          message: 'email o password son incorrectos',
          status: 400
        }
      }
      return {
        error: true,
        message: 'email o password son incorrectos',
        status: 400
      }
    } catch (error) {
      return {
        error: true,
        message: 'entro al catch',
        status: 500
      }
    }
  }
}