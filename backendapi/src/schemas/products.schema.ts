import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})

export class products {
    @Prop({
        required: true,
        trim: true
    })
    categoria: string;

    @Prop({
        required: true,
        trim: true,
        unique: true
    })
    producto: string;

    @Prop({
        required: true,
        unique: true,
        trim: true
    })
    referencia: string;

    @Prop({
        required: true,
        trim: true
    })
    tamaño: number;
    
    @Prop({
        required: true,
        trim: true
    })
    medida: string;
    
    @Prop({
        required: true,
        trim: true
    })
    cantidad: number;
    
    @Prop({
        required: true,
        trim: true
    })
    precio: number;
    
    @Prop({
        required: true,
        trim: true
    })
    total: number;
}

export const productsSchema = SchemaFactory.createForClass(products);