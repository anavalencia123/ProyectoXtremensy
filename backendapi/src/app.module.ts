import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://rosarosero0611:Atlas@cluster0.gxse5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
      dbName: 'xtremensy',
    }
  ),
    ProductsModule
  ],

})
export class AppModule { }

