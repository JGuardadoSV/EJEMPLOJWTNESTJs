import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@ApiTags('usuario')
@ApiBearerAuth('JWT-auth')
@Controller('usuario')

export class UsuarioController {

  constructor(private readonly usuarioService: UsuarioService) {}


  @ApiBody({type:CreateUsuarioDto})
  @Post('/crear') //se envia un json { "usuario":"Administrador",  "clave":"123456" }
    async createUser(@Body() datos:CreateUsuarioDto): Promise<Usuario> {
        const saltOrRounds = 10;
        const claveEncriptada = await bcrypt.hash(datos.clave, saltOrRounds); // acá se encripta
        datos.clave=claveEncriptada
        const result = await this.usuarioService.createUser(datos);
        return result;
    }

    @ApiBody({type:UpdateUsuarioDto})
  @Patch('/actualizar') //se envia un json { "usuario":"Administrador",  "clave":"123456" }
    async updateUser(@Body() datos:UpdateUsuarioDto): Promise<Usuario> {
        const result = await this.usuarioService.updateUser(datos);
        return result;
    }

    @ApiBody({
      description: 'ID del usuario',
      type: String
    })
    @Delete('/eliminar') //se envia un json { "usuario":"Administrador",  "clave":"123456" }
      async deleteUser(@Body() datos): Promise<Usuario> {
          const result = await this.usuarioService.deleteUser(datos.id);
          return result;
      }



    
   // @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso
    @ApiBody({type:CreateUsuarioDto})
    @Get('/buscarUno') //se envia un json { "usuario":"Administrador",  "clave":"123456" }
    async getUser( @Body('usuario') usuario: string): Promise<Usuario> {
      const resultado=await this.usuarioService.getUser(usuario)
      return resultado;
    }

   //@UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso
    @Get('/todos') //se envia un json { "usuario":"Administrador",  "clave":"123456" }
    async todos( ): Promise<Usuario[]> {
      const resultado=await this.usuarioService.todos()
      return resultado;
    }
}
