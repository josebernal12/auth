import { Router } from 'express'
import { AuthController } from '../../controllers/auth/AuthController'
import validateCreate from '../../midlewares/validators/users'
const router = Router()
router.post('/create-account',
  validateCreate,
  AuthController.createAccount
)
router.post('/login', AuthController.login)
export default router