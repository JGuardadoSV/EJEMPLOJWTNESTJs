import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { ReportesModule } from './reportes/reportes.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://adminmoduloiii:soloyo123@moduloiii.gyrzj.mongodb.net/?retryWrites=true&w=majority'), UsuarioModule, AuthModule, ReportesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
