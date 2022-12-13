import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { StoreRepository } from './store.repo';

@Injectable()
export class StoreService {
  constructor(private readonly storeRepo: StoreRepository) {}

  create(createStoreDto: CreateStoreDto) {
    return 'This action adds a new store';
  }

  findAll() {
    return this.storeRepo.findAll();
  }

  findOne(id: string) {
    return this.storeRepo.findOne(id);
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}