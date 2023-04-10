import {
  repository
} from '@loopback/repository';
import {
  getModelSchemaRef,
  post,
  requestBody,
  response
} from '@loopback/rest';
import {Manufacturer} from '../models';
import {ManufacturerRepository} from '../repositories';

export class ManufacturerController {
  constructor(
    @repository(ManufacturerRepository)
    public manufacturerRepository: ManufacturerRepository,
  ) { }

  @post('/manufacturer')
  @response(200, {
    description: 'Manufacturer model instance',
    content: {'application/json': {schema: getModelSchemaRef(Manufacturer)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Manufacturer, {
            title: 'NewManufacturer',
            exclude: ['id'],
          }),
        },
      },
    })
    manufacturer: Omit<Manufacturer, 'id'>,
  ): Promise<Manufacturer> {
    console.log("Hello from create manufacturer");
    const result = this.manufacturerRepository.create(manufacturer);
    return result;
  }

  // @get('/manufacturer/count')
  // @response(200, {
  //   description: 'Manufacturer model count',
  //   content: {'application/json': {schema: CountSchema}},
  // })
  // async count(
  //   @param.where(Manufacturer) where?: Where<Manufacturer>,
  // ): Promise<Count> {
  //   return this.manufacturerRepository.count(where);
  // }

  // @get('/manufacturer')
  // @response(200, {
  //   description: 'Array of Manufacturer model instances',
  //   content: {
  //     'application/json': {
  //       schema: {
  //         type: 'array',
  //         items: getModelSchemaRef(Manufacturer, {includeRelations: true}),
  //       },
  //     },
  //   },
  // })
  // async find(
  //   @param.filter(Manufacturer) filter?: Filter<Manufacturer>,
  // ): Promise<Manufacturer[]> {
  //   return this.manufacturerRepository.find(filter);
  // }

  // @patch('/manufacturer')
  // @response(200, {
  //   description: 'Manufacturer PATCH success count',
  //   content: {'application/json': {schema: CountSchema}},
  // })
  // async updateAll(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Manufacturer, {partial: true}),
  //       },
  //     },
  //   })
  //   manufacturer: Manufacturer,
  //   @param.where(Manufacturer) where?: Where<Manufacturer>,
  // ): Promise<Count> {
  //   return this.manufacturerRepository.updateAll(manufacturer, where);
  // }

  // @get('/manufacturer/{id}')
  // @response(200, {
  //   description: 'Manufacturer model instance',
  //   content: {
  //     'application/json': {
  //       schema: getModelSchemaRef(Manufacturer, {includeRelations: true}),
  //     },
  //   },
  // })
  // async findById(
  //   @param.path.number('id') id: number,
  //   @param.filter(Manufacturer, {exclude: 'where'}) filter?: FilterExcludingWhere<Manufacturer>
  // ): Promise<Manufacturer> {
  //   return this.manufacturerRepository.findById(id, filter);
  // }

  // @patch('/manufacturer/{id}')
  // @response(204, {
  //   description: 'Manufacturer PATCH success',
  // })
  // async updateById(
  //   @param.path.number('id') id: number,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Manufacturer, {partial: true}),
  //       },
  //     },
  //   })
  //   manufacturer: Manufacturer,
  // ): Promise<void> {
  //   await this.manufacturerRepository.updateById(id, manufacturer);
  // }

  // @put('/manufacturer/{id}')
  // @response(204, {
  //   description: 'Manufacturer PUT success',
  // })
  // async replaceById(
  //   @param.path.number('id') id: number,
  //   @requestBody() manufacturer: Manufacturer,
  // ): Promise<void> {
  //   await this.manufacturerRepository.replaceById(id, manufacturer);
  // }

  // @del('/manufacturer/{id}')
  // @response(204, {
  //   description: 'Manufacturer DELETE success',
  // })
  // async deleteById(@param.path.number('id') id: number): Promise<void> {
  //   await this.manufacturerRepository.deleteById(id);
  // }
}
