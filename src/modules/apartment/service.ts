import { DocumentType } from '@typegoose/typegoose'
import { ApartmentRepository } from '../../shared/repositories'
import { ApartmentModel, Apartment } from '../../shared/models'

export class ApartmentService {
  private readonly repository: ApartmentRepository = new ApartmentRepository(ApartmentModel)

  async create (apartment: Apartment): Promise<DocumentType<Apartment>> {
    const createApartment = await this.repository.create(apartment)

    return createApartment
  }
}
