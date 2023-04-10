import {Entity, hasMany, model, property} from '@loopback/repository';
import {Phone} from './phone.model';

@model()
export class Manufacturer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    databaseGenerated: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  location?: string;

  @hasMany(() => Phone, {keyTo: 'manufacturerId'})
  phones: Phone[];

  constructor(data?: Partial<Manufacturer>) {
    super(data);
  }
}

export interface ManufacturerRelations {
  // describe navigational properties here
}

export type ManufacturerWithRelations = Manufacturer & ManufacturerRelations;
