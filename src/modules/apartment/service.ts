import { DocumentType } from '@typegoose/typegoose'
import { ApartmentRepository } from '../../shared/repositories'
import { ApartmentModel, Apartment } from '../../shared/models'
import { MongoId } from 'src/shared/types'
import { ApiError } from 'src/shared/exception'

export class ApartmentService {
  private readonly repository: ApartmentRepository = new ApartmentRepository(ApartmentModel)

  async create (apartment: Apartment): Promise<DocumentType<Apartment>> {
    return await this.repository.create(apartment)
  }

  async findAll (): Promise<DocumentType<Apartment>[]> {
    return await this.repository.findAll()
  }

  async find (query: object): Promise<DocumentType<Apartment>[]> {
    return await this.repository.find(query)
  }

  async findById (id: MongoId): Promise<DocumentType<Apartment>> {
    return await this.repository.findById(id)
  }

  async findOne (query: object): Promise<DocumentType<Apartment>> {
    return await this.repository.findOne(query)
  }

  async delete (id: MongoId): Promise<boolean> {
    return Boolean(await this.repository.delete(id))
  }

  async update (id: MongoId, newApartment: Apartment): Promise<DocumentType<Apartment>> {
    const apartment: Apartment = await this.repository.findById(id)

    if (!apartment) throw new ApiError('Uer Not Found', 404)

    return await this.repository.update(id, newApartment)
  }
}
