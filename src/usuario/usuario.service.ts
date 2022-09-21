import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Console } from 'console';
import { Model } from 'mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UserDocument, Usuario } from './entities/usuario.entity';


@Injectable()
export class UsuarioService {

  constructor(@InjectModel('usuario') private readonly userModel: Model<UserDocument>) { }


  async createUser(u:CreateUsuarioDto): Promise<Usuario> {
      return this.userModel.create(u);
  }

  async updateUser(u:UpdateUsuarioDto): Promise<Usuario> {
    const filtro = { _id: u.id };
    await this.userModel.findOneAndUpdate(filtro,u);
   return  await this.userModel.findOne(filtro);
}

async deleteUser(id:string):Promise<any> {
    const filtro = { "_id": id };
   return  await this.userModel.findByIdAndDelete(filtro);
}
  async getUser( usuario ): Promise<Usuario> {
    
      return await this.userModel.findOne({usuario:usuario});
  }

  async todos( ): Promise<Usuario[]> {
    
    return await this.userModel.find();
}
  
}
