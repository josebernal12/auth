import { Request, Response } from 'express';
import { UserService } from '../../service/user/UserService';
import { Helper } from '../../helpers/helper/helper';

type QueryParams = {
    name: string;
    showAll: string; // Las consultas de URL son siempre cadenas
    quantity: string; // Las consultas de URL son siempre cadenas
  }
  
export class UserController {

    static async getAll(req: Request<{}, {}, {}, QueryParams>, res: Response) {
        const { name, showAll, quantity } = req.query
        const regex = Helper.transformNameRegularExpression(name)
        const showAllNumber = parseInt(showAll, 10);
        const quantityNumber = parseInt(quantity, 10);
    
        const response = await UserService.getAll(regex, showAllNumber, quantityNumber)

        res.json({
            error: response.error,
            message: response.message,
            data: response.data,
            status: response.status,
        })
    }
}