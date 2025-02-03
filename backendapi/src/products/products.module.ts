import { Module } from '@nestjs/common';
import { productsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { products, ProductSchema  } from 'src/schemas/product.schema';

@Module({
  imports: [
            MongooseModule.forFeature([
              {
                name: products.name,
                schema: ProductSchema,
              },
            ]),
  ],

  controllers: [ProductsController],
  providers: [productsService],
})
export class ProductsModule {}


