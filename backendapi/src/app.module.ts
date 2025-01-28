import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://ianandres996:kenichiandres@cluster0.fbjls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
      dbName: 'xtremensy',
    }
  ),
    ProductsModule
  ],

})
export class AppModule { }

