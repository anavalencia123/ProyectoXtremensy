import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { productsService } from './products.service';
import { createProductsDto } from 'src/dto/create-products-dto';
import { updateProductsDto } from 'src/dto/update-products-dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: productsService) {
    }

    @Post('/')
    create(@Body() body:createProductsDto) {
        return this.productsService.create(body);
    }

    @Get()
    findAll() {
        return this.productsService.finAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string) {
        return this.productsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() body: updateProductsDto) {
        return this.productsService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id:string) {
        this.productsService.delete(id);	
    }
}
