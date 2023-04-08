import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Manufacturer, ManufacturerRelations} from '../models';

export class ManufacturerRepository extends DefaultCrudRepository<
  Manufacturer,
  typeof Manufacturer.prototype.id,
  ManufacturerRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Manufacturer, dataSource);
  }
}
