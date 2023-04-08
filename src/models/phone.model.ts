import {Entity, belongsTo, model, property} from '@loopback/repository';
import {Manufacturer, ManufacturerWithRelations} from './manufacturer.model';

@model()
export class Phone extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  @property({
    type: 'date',
  })
  releaseDate?: string;

  // @property({
  //   type: 'number'
  // })
  @belongsTo(() => Manufacturer, {name: 'manufacturer'})
  manufacturerId: number;

  constructor(data?: Partial<Phone>) {
    super(data);
  }
}

export interface PhoneRelations {
  manufacturer?: ManufacturerWithRelations;
}

export type PhoneWithRelations = Phone & PhoneRelations;
