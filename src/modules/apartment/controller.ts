import { Request } from 'express'
import Controller from '../../shared/decorators/controller.decorator'
import { Post } from '../../shared/decorators/http-method.decorator'
import { ApartmentService } from './service'

@Controller('/apartment')
export class ApartmentController {
  private readonly service = new ApartmentService()

  @Post('/create')
  async create (req: Request): Promise<any> {
    const apartment = req.body
    return await this.service.create(apartment)
  }
}
