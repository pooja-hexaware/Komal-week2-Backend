import { Injectable } from '@nestjs/common';
import { ItemRepository } from './item.repo';

@Injectable()
export class ItemService {
  constructor(private readonly itemRepo: ItemRepository) {}

  async findAll() {
    return this.itemRepo.findAllItems();
  }

  findOneItem(id: string) {
    return this.itemRepo.findOneItem(id);
  }

  async findByIds(ids: string) {
    const idsArray = ids.split(',');
    return this.itemRepo.findItemsByIds(idsArray);
  }

}