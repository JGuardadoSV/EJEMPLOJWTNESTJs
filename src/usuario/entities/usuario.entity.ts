import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document } from 'mongoose';


export type UserDocument = Usuario & Document;

@Schema({ versionKey: false })
export class Usuario {
  @ApiProperty()
  _id: mongoose.Types.ObjectId;
  @ApiProperty()
  @Prop()
  usuario: string;
  @ApiProperty()
  @Prop()
  correo: string;
  @ApiProperty()
  @Prop()
  clave: string;
  @ApiProperty()
  @Prop()
  rol: string;
  @ApiProperty()
  @Prop()
  activo: boolean;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);