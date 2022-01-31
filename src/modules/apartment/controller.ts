import Auth from '../../shared/decorators/authentication.decrator'
import Controller from '../../shared/decorators/http/controller.decorator'
import { Delete, Get, Post, Put } from '../../shared/decorators/http/http-method.decorator'
import { Body, Params } from '../../shared/decorators/http/request-properties.decorator'
import { Apartment } from '../../shared/models'
import { MongoId } from '../../shared/types'
import { ApartmentService } from './service'

@Controller('/apartment')
export class ApartmentController {
  private readonly service = new ApartmentService()

  @Post('/')
  @Auth()
  async create (@Body() apartment: Apartment): Promise<any> {
    return await this.service.create(apartment)
  }

  @Get('/')
  @Auth()
  async findAll (): Promise<any> {
    return await this.service.findAll()
  }

  @Get('/:id')
  @Auth()
  async findById (@Params('id') id: MongoId): Promise<any> {
    return await this.service.findById(id)
  }

  @Put('/:id')
  @Auth()
  async update (@Params('id') id: MongoId, @Body() apartment: Apartment): Promise<any> {
    return await this.service.update(id, apartment)
  }

  @Delete('/:id')
  @Auth()
  async delete (@Params('id') id: MongoId): Promise<boolean> {
    return await this.service.delete(id)
  }
}
