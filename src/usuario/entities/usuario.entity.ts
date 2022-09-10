import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Exclude } from 'class-transformer';

export type UserDocument = Usuario & Document;

@Schema()
export class Usuario {
  
  _id: mongoose.Types.ObjectId;
  @Prop()
  usuario: string;

  @Prop()
  
  clave: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);