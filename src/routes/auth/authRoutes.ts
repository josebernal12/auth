import { Router } from 'express'
import { AuthController } from '../../controllers/auth/AuthController'
// import { body } from 'express-validator'
const router = Router()
//TODO agregar el middleware handleinputErrors
router.post('/create-account',
  // body('name')
  //   .notEmpty().withMessage('el nombre no puede ir vacio'),
  // body('password')
  //   .notEmpty().withMessage('el nombre no puede ir vacio'),
  // body('password_confirmation').custom((value, { req }) => {
  //   if(value !== req.body.password) {
  //     throw new Error('Los Password no son iguales')
  //   }
  //   return true
  // }),
  // body('email')
  //   .isEmail().withMessage('el email no es valido'),
  AuthController.createAccount
)
router.post('/login', AuthController.login)
export default router