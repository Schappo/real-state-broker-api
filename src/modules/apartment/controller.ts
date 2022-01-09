import { Request } from 'express'
import Controller from '../../shared/decorators/controller.decorator'
import { Post } from '../../shared/decorators/http-method.decorator'

@Controller('/apartment')
export class ApartmentController {
  @Post('/login')
  async login (req: Request): Promise<any> {

  }
}
