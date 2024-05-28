import jwt from 'jsonwebtoken'
import { UserPayload } from '../types/user.type'
import { env } from './envalid'

export const generateToken = (payload: UserPayload) => {
  const token = jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: '180d'
  })
  return token
}