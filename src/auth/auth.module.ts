import { Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { MongooseModule } from "@nestjs/mongoose"
import { LocalStrategy } from "./strategies/local.strategy";
import { UsuarioSchema } from "src/usuario/entities/usuario.entity";
import { UsuarioModule } from "src/usuario/usuario.module";
import { UsuarioService } from "src/usuario/usuario.service";
import { JwtStrategy } from "./strategies/jwt.strategy";



@Module({
  imports: [UsuarioModule, PassportModule, JwtModule.register({
    secret: 'secretKey',
    signOptions: { expiresIn: '5m' },
  }), MongooseModule.forFeature([{ name: "usuario", schema: UsuarioSchema }])],
  providers: [AuthService, UsuarioService, LocalStrategy,JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule { }