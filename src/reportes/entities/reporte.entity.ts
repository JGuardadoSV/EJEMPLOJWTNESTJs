import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Usuario } from 'src/usuario/entities/usuario.entity';


export type UserDocument = Reporte & Document;

@Schema({ versionKey: false })
export class Reporte {
  
  _id: mongoose.Types.ObjectId;
  
  @Prop()
  fecha: Date;

  @Prop()
  descripcion: string;

  @Prop()
  usuario: Usuario;

  @Prop()
  clasificacion: string[];

  @Prop()
  fotografia: string;
}

export const ReporteSchema = SchemaFactory.createForClass(Reporte);
