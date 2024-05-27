import mongoose, { Schema } from 'mongoose'
import { UserType } from '../types/user.type'



const AuthSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
})

const Auth = mongoose.model<UserType>('User', AuthSchema)

export default Auth