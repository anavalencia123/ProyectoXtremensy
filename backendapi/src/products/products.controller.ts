import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { productsService } from './products.service';
import { createProductsDto } from 'src/dto/create-products-dto';
import { updateProductsDto } from 'src/dto/update-products-dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: productsService) {
    }

    @Post()
    create() {
        return 'Se ha creado un nuevo producto';
    }

    @Get()
    findAll() {
        return 'Se han obtenido todos los productos';
    }

    @Get(':id')
    findOne() {
        return 'Se ha obtenido un producto';
    }

    @Put(':id')
    update() {
        return 'Se ha actualizado un producto';
    }

    @Delete(':id')
    delete() {
        return 'Se ha eliminado un producto';	
    }
}
