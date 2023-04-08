import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Phone, PhoneRelations} from '../models';

export class PhoneRepository extends DefaultCrudRepository<
  Phone,
  typeof Phone.prototype.id,
  PhoneRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Phone, dataSource);
  }
}
