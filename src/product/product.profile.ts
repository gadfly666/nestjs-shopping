import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper, MappingProfile, createMap, forMember, ignore } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductProfile extends AutomapperProfile {

  constructor(@InjectMapper() mapper: Mapper){
    super(mapper);
  }

  override get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, Product, ProductDto);
      createMap(mapper, ProductDto, Product,
        forMember((p) => p.id, ignore())
      );
    };
  }

}