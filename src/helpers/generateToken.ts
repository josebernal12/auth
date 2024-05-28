import jwt from 'jsonwebtoken'
import { Types } from 'mongoose'
import { UserPayload } from '../types/user.type'

export const generateToken = (payload: UserPayload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '180d'
  })
  return token
}