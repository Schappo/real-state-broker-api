import { Request } from 'express'
import Controller from '../../shared/decorators/http/controller.decorator'
import { Delete, Get, Post, Put } from '../../shared/decorators/http/http-method.decorator'
import { ApartmentService } from './service'

@Controller('/apartment')
export class ApartmentController {
  private readonly service = new ApartmentService()

  @Post('/')
  async create (req: Request): Promise<any> {
    const apartment = req.body
    return await this.service.create(apartment)
  }

  @Get('/')
  async findAll (): Promise<any> {
    return await this.service.findAll()
  }

  @Get('/:id')
  async findById (req: Request): Promise<any> {
    const { id } = req.params
    return await this.service.findById(id)
  }

  @Put('/:id')
  async update (req: Request): Promise<any> {
    const { id } = req.params
    const apartment = req.body
    return await this.service.update(id, apartment)
  }

  @Delete('/:id')
  async delete (req: Request): Promise<boolean> {
    const { id } = req.params
    return await this.service.delete(id)
  }
}
