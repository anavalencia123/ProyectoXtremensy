import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://rubendiazcardenas2002:matrix2002@cluster0.fk3wc.mongodb.net/?retryWrites=true&w=majority',
    {
      dbName: 'products',
    }
  ),
    ProductsModule
  ],

})
export class AppModule { }

