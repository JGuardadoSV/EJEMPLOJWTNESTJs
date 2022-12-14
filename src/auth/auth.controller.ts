import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller()
@ApiBearerAuth('JWT-auth')
export class AuthController {
    constructor(private authService: AuthService) {
        
     }

   @UseGuards(LocalAuthGuard)
   @ApiBody({description: "body:{ 'usuario':'', 'clave':'' }"})
    @Post('auth/login') // login requiere un json { "usuario":"Administrador2", "clave":"123456" }
    async login(@Request() req) {
        //req lleva todos los datos del request por lo tanto se extrae lo que va en el body
        return this.authService.login(req.body); 
    }

    //Aseguramos la ruta
    @UseGuards(JwtAuthGuard) //hay que enviar el token
    
    @Get('secreto')
    secreto(@Request() req) {
        return { mensaje:"Usuario autenticado" };
    }
}
