import { Module } from '@nestjs/common';
import { productsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { products, productsSchema  } from 'src/schemas/products.schema';

@Module({
  imports: [
            MongooseModule.forFeature([
              {
                name: products.name,
                schema: productsSchema,
              },
            ]),
  ],

  controllers: [ProductsController],
  providers: [productsService],
})
export class ProductsModule {}


