import { Injectable } from '@nestjs/common';
import { CreateToppingDto } from './dto/create-topping.dto';
import { UpdateToppingDto } from './dto/update-topping.dto';
import { ToppingRepository } from './topping.repo';


@Injectable()
export class ToppingService {
  constructor(private readonly toppingRepo: ToppingRepository) {}

  create(createToppingDto: CreateToppingDto) {
    return 'This action adds a new topping';
  }

  findAll() {
    return this.toppingRepo.findAll();
  }

  async findByIds(ids: string) {
    const idsArray = ids.split(',');
    return this.toppingRepo.findByIds(idsArray);
  }

  findOne(id: string) {
    return this.toppingRepo.findOne(id);
  }

  update(id: number, updateToppingDto: UpdateToppingDto) {
    return `This action updates a #${id} topping`;
  }

  remove(id: number) {
    return `This action removes a #${id} topping`;
  }

}