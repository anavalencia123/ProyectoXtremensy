import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { productsService } from './products.service';
import { createProductsDto } from 'src/dto/create-products-dto';
import { updateProductsDto } from 'src/dto/update-products-dto';
import { ConflictException } from '@nestjs/common';
import {NotFoundException} from '@nestjs/common';
import { HttpCode } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    constructor(private productsService: productsService) {
    }

    @Post('/')
    async create(@Body() body:createProductsDto){
        try {
            return await this.productsService.create(body);  
        } catch (error) {
            if (error.code === 11000){
                throw new ConflictException('El producto ya esta Registrado');
            }
            throw error;
        }
    }


    @Get()
    findAll() {
        return this.productsService.finAll();
    }

    @Get(':id')
    async findOne(@Param('id') id:string){
        try {
            const act = await this.productsService.findOne(id);
            if (!act ){
                throw new NotFoundException('El producto no existe');
            } 
            return act;
        } catch (error) {
            throw error;
        }
    }


    @Put(':id')
    async update(@Param('id') id:string, @Body() body: updateProductsDto){
        try { 
            const act = this.productsService.update(id,body);
            if(!act){
                throw new NotFoundException('La Actividad no Existe');
            }
            return act;
        } catch (error) {
            throw error;
        }      
    }


    @Delete(':id')

    @HttpCode(204)
    async delete(@Param('id') id:string){
        try {
            const act = this.productsService.delete(id);
            if (!act ){
                throw new NotFoundException('El producto no existe');
            } 
            return act;
        } catch (error) {
            throw error;
        }
    }

}
