import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ToppingService } from './topping.service';
import { CreateToppingDto } from './dto/create-topping.dto';
import { UpdateToppingDto } from './dto/update-topping.dto';

@Controller('topping')
export class ToppingController {
  constructor(private readonly toppingService: ToppingService) {}
  @Get()
  findAll() {
    return this.toppingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toppingService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToppingDto: UpdateToppingDto) {
    return this.toppingService.update(+id, updateToppingDto);
  }

  @Get('findByIds')
  findByIds(@Query('ids') ids: string) {
    return this.toppingService.findByIds(ids);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toppingService.remove(+id);
  }
}